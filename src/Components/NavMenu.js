import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../CSS/NavMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class NavMenu extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

    render() {
      return (                        
            <nav className="navbar navbar-light  fixed-top" style={navColor}>    
              <div className="col-3 float-left mt-3" >
                  <a href="/#top"><img src={process.env.PUBLIC_URL + '/images/MainPage/CJ final.png'} width="94" height="67" alt="Logo" /></a>
              </div>          
              <div className="col-9 cl-effect-1" style={navCont}>                             
                    <a href="/#portfolio" style={navText}>Projects</a>
                  <Link activeClass="active" to="/AboutMe" style={navText}>About Me</Link> 
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
