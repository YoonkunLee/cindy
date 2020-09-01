import React, { Component } from 'react';
import '../CSS/NavMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class NavMenu extends Component {
    render() {
      return (                        
            <nav className="container navbar navbar-light  fixed-top" style={navColor}>    
              <div className="col-3 float-left mt-3" >
                  <a href="/#top"><img src={process.env.PUBLIC_URL + '/images/MainPage/CJ final.png'} width="94" height="67" alt="Logo" /></a>
              </div>          
              <div className="col-9 cl-effect-1" style={navCont}>                             
                    <a href="/#portfolio" style={navText}>Projects</a>
                    <a href="/#aboutMe" style={navText}>About Me</a> 
                    <a href="/#contact" style={navText}>Contact</a> 
              </div>
            </nav>
      );
    }
  }

  var navText ={
    color: "black",
    fontSize: "15px",

  }

  var navColor ={
    backgroundColor: "white"
  }

  var navCont ={
    textAlign: "right",
  }
