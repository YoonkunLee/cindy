import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/NavMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavMenu extends Component {
    render() {
      return (
        <div className="container-fluid ">       
            <div className="col-3 float-left overflow-hidden mt-3">
                <Link to="/"><img src={process.env.PUBLIC_URL + '/images/MainPage/CJ final.png'} width="94" height="67" alt="Logo" /></Link> 
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