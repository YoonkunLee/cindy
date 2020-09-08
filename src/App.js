import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavMenu from './Components/NavMenu';

export default class App extends Component {
  render(){
    return (    
      <Router>            
        <div className="App container-fluid grid overflow-hidden" >   
            <div className="maxWidth" >      
                <NavMenu />
                <Route exact path="/" component={Home} />              
            </div>
        </div> 
      </Router>
    );
  }  
}
