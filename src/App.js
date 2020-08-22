import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import Home from './Pages/Home';
import PortfolioDetail from './Pages/PortfolioDetail';
import NavMenu from './Components/NavMenu';
import Footer from './Components/Footer'

export default class App extends Component {
  render(){
    return (    
      <Router>    
        <div className="App">    
          <NavMenu />
          <div style={bannerStyle}>
            <Route exact path="/" component={Home} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/PortfolioDetail/:id" component={PortfolioDetail} />
          </div>         
            <Footer />
        </div>
      </Router>
    );
  }  
}

var bannerStyle ={
  width: "100%",
  marginTop: "30px"
}