import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import Home from './Pages/Home';
import PortfolioDetail from './Pages/PortfolioDetail';
import NavMenu from './Components/NavMenu';

export default class App extends Component {
  render(){
    return (    
      <Router>    
        <div className="App">    
          <NavMenu />
          <div style={bannerStyle}>
            <Route exact path="/" component={Home} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/PortfolioDetail" component={PortfolioDetail} />
          </div>         
          <div className="w-100 mt-5" />
              <footer className="footer-copyright text-center footer-green py-3 botton-0 letter-spacing-5">
                <div>
                  <a href="/">Cindy Minyoung Jeon</a>
                  <span>&copy; 2020 Cindy's Website.</span>
                </div>
                <div className="ml-auto">
                  | <span>Powered by</span> Cindy Jeon | Copyright: Cindy Minyoung Jeon, Yoonkun Lee
                  |
                </div>
              </footer>
          </div>
      </Router>
    );
  }  
}

var bannerStyle ={
  width: "90%",
  marginLeft: "5%",
  marginTop: "30px"
}