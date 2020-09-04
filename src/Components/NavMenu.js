import React, { Component } from 'react';
import '../CSS/NavMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class NavMenu extends Component {
    render() {
      return (                        
            <nav className="container-fluid navbar navbar-light fixed-top maxWidth" >    
              <div className="col-3 float-left mt-2 overflow-hidden" >
                  <a href="/#top"><img src={process.env.PUBLIC_URL + '/images/MainPage/logo.png'}  className="logo"/></a>
              </div>          
              <div className="col-9 cl-effect-1 mt-3" style={navCont}>                             
                    <a href="/#portfolio" style={navText}>Projects</a>
                    <a href="/#aboutMe" style={navText}>About Me</a> 
                    <a href="/#contact" style={navText}>Contact</a> 
              </div>
            </nav>
      );
    }
  }

  var navText ={
    color: "#8e8b8b",
    fontSize: "13px",

  }

  var navColor ={
    backgroundColor: "white",
    width: "75%",
    paddingBottom: "0px"
  }

  var navCont ={
    textAlign: "right",  
  }
