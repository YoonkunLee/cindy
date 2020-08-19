import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/NavMenu.css';
import logo from '../images/MainPage/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavMenu extends Component {
    render() {
      return (
        <nav className="navbar navbar-light">
            <Link to="/Home"><img src={logo} width="75" height="40" alt="Logo" /></Link>           
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
            <Link to="/AboutMe" style={navText}>About Me</Link>      
        </nav>
      );
    }
  }

  var navText ={
    color: "black",
    fontSize: "20px"
  }
  