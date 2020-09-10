
import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Link,Route} from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage';
import NewMoviePage from './components/pages/NewMoviePage';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import {
  Container
} from 'semantic-ui-react'

import { render } from '@testing-library/react';




class App extends React.Component  {
 

  

  

  





  render(){
   
  return (
   
    <div className="App">
          
     
        <Header/>
        <Container text>
        
          
        

      <Route exact path='/movies' component={MoviesPage}></Route>
      <Route exact path='/movies/new' component={NewMoviePage}></Route>
      <Route exact path='/movie/:_id' component={NewMoviePage}></Route>
      <Route exact path='/' component={HomePage}></Route>
      <hr/>
      
        </Container>

        
         <Footer/>
         
      
       
        
    </div>
  );} }


export default App;
