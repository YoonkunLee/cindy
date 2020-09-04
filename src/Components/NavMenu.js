import React, { Component } from 'react';
import '../CSS/NavMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default class NavMenu extends Component {
    render() {
      return (                  
      <Navbar className="navmaxWidth" collapseOnSelect fixed="top" expand="lg" bg="white" variant="light">
      <Navbar.Brand href="#top"><img src={process.env.PUBLIC_URL + '/images/MainPage/logo.png'}  className="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=" cl-effect-1 mt-3 ml-auto" style={navCont}>
          <Nav.Link href="/#portfolio" style={navText}>Projects</Nav.Link>
          <Nav.Link href="/#aboutMe" style={navText}>About Me</Nav.Link>
          <Nav.Link href="/#contact" style={navText}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
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
