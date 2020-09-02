import React, { Component } from 'react';
import '../CSS/contact.css';
import {Link} from 'react-router-dom';

export default class Contact extends Component {
    render(){
        
        return (
            <div className="container-fluid" style={background}>
                <div className="grid">
                    <img  style={spacingBanner} src={process.env.PUBLIC_URL + "/images/MainPage/Contact.png" } width="150px" alt="Main Banner"></img>                 
                    <div className="mainfont" style={textStyle}>
                        <h4 style={textStrong }>Phone:</h4>
                        <h4>+64 21 031 7400</h4>
                        <h4 style={textStrong }>Email:</h4>
                        <h4>minyoung307@hotmail.com</h4>                            
                        <a href="https://nz.linkedin.com/in/cindyjeon" target="_blank" rel="noopener noreferrer"><img style={spacingIcon} src={process.env.PUBLIC_URL + "/images/MainPage/Linkedin.png" } width="70px" alt="Main Banner"></img></a> 
                        <a href="https://www.behance.net/CindyJeon" target="_blank" rel="noopener noreferrer"><img style={spacingIcon} src={process.env.PUBLIC_URL + "/images/MainPage/Behance.png" } width="70px" alt="Main Banner"></img></a> 
                        <Link to="/File/Cindy Jeon Resume 2020.pdf" target="_blank" download><img style={spacingIcon} src={process.env.PUBLIC_URL + "/images/MainPage/CV.png" } width="70px" alt="Main Banner"></img></Link>  
                        <h2 style={footer}>© Copyright 2020 Cindy Jeon</h2>
                    </div> 
                </div>
            </div>
        );
    }
}

var textStyle = {
    color: "white"
}

var textStrong ={
    fontWeight: "bold",
    marginTop: "25px"
}

var background = {
    backgroundColor: "#333333",
    marginTop: "50px"
}

var spacingBanner ={
    marginBottom: "100px",
    marginTop: "130px",
    paddingLeft: "15px"
}

var spacingIcon={
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "100px",
    marginTop: "100px"
}

var footer ={
    fontSize: "15px",
    paddingBottom: "50px"
}
