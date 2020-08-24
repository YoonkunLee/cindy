import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/NavMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavMenu extends Component {
    render() {
      return (                        
            <nav className="navbar navbar-light cl-effect-1 fixed-top" style={navColor}>    
              <div className="col-3 float-left mt-3 ">
                  <a href="/#top"><img src={process.env.PUBLIC_URL + '/images/MainPage/CJ final.png'} width="94" height="67" alt="Logo" /></a> 
              </div>          
              <div className="col-9" style={navCont}>            
                  <a href="/#portfolio" style={navText}>Portfolio</a>
                  <Link to="/AboutMe" style={navText}>About Me</Link> 
              </div>
            </nav>
      );
    }
  }

  var navText ={
    color: "black",
    fontSize: "20px",
    marginRight: "10%"
  }

  var navColor ={
    backgroundColor: "white"
  }

  var navCont ={
    textAlign: "right",
  }