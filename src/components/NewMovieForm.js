import React, { Component } from 'react'
import { Button, Checkbox, Form ,Image,Message} from 'semantic-ui-react'
import InlineError from './InlineError';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
export default class NewMovieForm extends Component {
    state={
        title:this.props.movie ? this.props.movie.title:'',
        cover:this.props.movie ? this.props.movie.cover:'',
        errors:{}
    };

    static propTypes={
        onNewMovieSubmit:PropTypes.func.isRequired
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newMovie.movie.title && nextProps.newMovie.movie.title !==this.state.title){
         this.setState({
             title:nextProps.newMovie.movie.title,
             cover:nextProps.newMovie.movie.cover
         })
        }
    }

    handleChange=(e)=>{
  this.setState({
   [e.target.name]:e.target.value
  });
    }
     onSubmit=()=>{
       const errors=this.validate();
       this.setState({
        errors
       });

       if(Object.keys(errors).length===0){
           this.props.onNewMovieSubmit(this.state);
       }
     };
     validate=()=>{
         const errors={};
         if(!this.state.title) errors.title='cant be blank'
         if(!this.state.cover) errors.cover='cant be blank'
         return errors;
     };

    render() {
       const form=(
        <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
          
          <Form.Field error={!!this.state.errors.title}>
      <label>Title</label>
      {
          this.state.errors.title && <InlineError message={this.state.errors.title}/>
      }
      <input
       id='title'
       name='title'
       value={this.state.title}
       onChange={this.handleChange}
       placeholder='Title' />
    </Form.Field>
    <Form.Field error={!!this.state.errors.cover}>
      <label>Cover</label>
      {
          this.state.errors.cover && <InlineError message={this.state.errors.cover}/>
      }
      <input 
      id='cover'
      name='cover'
      value={this.state.cover}
      onChange={this.handleChange}
      placeholder='Cover' />
    </Form.Field>
    <Image src={this.state.cover} size='small' />
    <div className='clearfix'></div>
    <Button type='submit'>Submit</Button>
    {
        this.props.newMovie.error.response && (
            <Message negative>
            <Message.Header>We're sorry we can't apply that discount</Message.Header>
            <p>That offer has expired</p>
          </Message>
        )
    }
         </Form>   
       );
        return (
            <div>
               <h1>Movie Form</h1> 
               {
                   this.props.newMovie.done ? <Redirect to='/movies'/> : form
               }
    
 
            </div>
        )
    }
}
