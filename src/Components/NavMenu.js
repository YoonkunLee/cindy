import React, { Component } from 'react';
import '../CSS/NavMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default class NavMenu extends Component {
    render() {
      return (          
        <div id="nav">        
      <Navbar className="navmaxWidth" collapseOnSelect fixed="top" expand="lg" bg="white" variant="light">
      <Navbar.Brand href="#top"><img src={process.env.PUBLIC_URL + '/images/MainPage/logo.png'}  className="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="buttonpadding"/>
        <Navbar.Collapse className="floatRight" id="responsive-navbar-nav " >
          <Nav className=" cl-effect-1 ml-auto">
            <Nav.Link href="/#portfolio" className="navText">Projects</Nav.Link>
            <Nav.Link href="/#aboutMe" className="navText">About Me</Nav.Link>
            <Nav.Link href="/#contact" className="navText">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      );
    }
  }

