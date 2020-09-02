import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Home from './Pages/Home';
import PortfolioDetail from './Pages/PortfolioDetail';
import NavMenu from './Components/NavMenu';

export default class App extends Component {
  render(){
    return (    
      <Router>    
        <div className="App container-fluid overflow-hidden" style={screensize}>    
          <NavMenu />
          <div style={bannerStyle}>
            <Route exact path="/" component={Home} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/PortfolioDetail/:id" component={PortfolioDetail} />
          </div>         
        </div>
      </Router>
    );
  }  
}

var screensize ={
  width: "75%"
}

var bannerStyle ={
  width: "100%",
  marginTop: "120px",
  overflow: "hidden"
}