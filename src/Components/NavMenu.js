import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/NavMenu.css';
import logo from '../images/MainPage/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../images/MainPage/CJ final.png';
import logo2 from '../images/MainPage/CJ creative.png';

export default class NavMenu extends Component {
    render() {
      return (
        <div className="container-fluid ">       
            <div className="col-3 float-left overflow-hidden mt-3">
                <Link to="/"><img src={logo1} width="94" height="67" alt="Logo" /></Link> 
            </div>                 
            <nav className="navbar navbar-light cl-effect-1">          
                <a href="/#portfolio" style={navText}>Portfolio</a>
                <a href="/#contact" style={navText}>Contact</a>
                <Link to="/AboutMe" style={navText}>About Me</Link> 
            </nav>
        </div>
      );
    }
  }

  var navText ={
    color: "black",
    fontSize: "20px"
  }

  var navCont2 ={
    textDecoration: 'none'
  }
  