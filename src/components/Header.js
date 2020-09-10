
   import React from 'react';
   import {Link} from 'react-router-dom';
   import {fixedMenuStyle,menuStyle} from '../helpers/styleHelpers';
   import {
       Container,Visibility,Menu,Image,Statistic, Message, Icon 
     } from 'semantic-ui-react'
     
   class Header extends React.Component{
       state = {
           menuFixed: null,
           overlayFixed: false,
         };
   
         stickTopMenu = () => this.setState({ menuFixed: true })
     unStickTopMenu = () => this.setState({ menuFixed: null })
     
   
   render(){
       const { menuFixed} = this.state;
       return(
           <div><Visibility
           onBottomPassed={this.stickTopMenu}
           onBottomVisible={this.unStickTopMenu}
           once={false}
         > 
           <Menu
             borderless
             fixed={menuFixed ? 'top' : undefined}
             style={menuFixed ? fixedMenuStyle : menuStyle}
           >
             <Container text>
               <Menu.Item>
                 <Image size='mini' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3dCUh_qhpVgVtDAEohaMq_xXjDIwhiehSiA&usqp=CAU' />
               </Menu.Item>
               <Menu.Item header><h2 className="cod">Movieapp</h2></Menu.Item>
               <Menu.Item as={Link} to="/movies"><h3>Movies</h3></Menu.Item>
               <Menu.Item as={Link} to="/movies/new"><h3>Add New</h3></Menu.Item><hr/>
               <Statistic horizontal>
    <Statistic.Value>2,204</Statistic.Value>
    <Statistic.Label>Views</Statistic.Label>
  </Statistic><br/><br/>
  
             </Container>
             <Message positive>
    <Message.Header>www.berkantkaya.com.</Message.Header>
    <p>
     Bizi tercih ettiğiniz için teşekkür ederiz
    </p>
  </Message>
           </Menu>
         </Visibility>
   </div>
       );
   }
   }
   
   export default Header;