import React, { Component } from 'react';
import '../CSS/contact.css';
import {Link} from 'react-router-dom';

export default class Contact extends Component {
    render(){
        
        return (
            <div className="contactlayout">
                <div className="grid">
                    <img className="bannerSpacing" src={process.env.PUBLIC_URL + "/images/MainPage/Contact.png" } width="150px" alt="Main Banner"></img>                 
                    <div className="mainfont">
                        <h4 className="contactTitle">Phone:</h4>
                        <h4 className="contactBody">+64 21 031 7400</h4>
                        <h4 className="contactTitle">Email:</h4>
                        <h4 className="contactBody">minyoung307@hotmail.com</h4>                            
                        <a href="https://nz.linkedin.com/in/cindyjeon" target="_blank" rel="noopener noreferrer"><img className="iconSpacing" src={process.env.PUBLIC_URL + "/images/MainPage/Linkedin.png" }  alt="Main Banner"></img></a> 
                        <a href="https://www.behance.net/CindyJeon" target="_blank" rel="noopener noreferrer"><img className="iconSpacing" src={process.env.PUBLIC_URL + "/images/MainPage/Behance.png" }  alt="Main Banner"></img></a> 
                        <Link to="/File/Cindy Jeon Resume 2020.pdf" target="_blank" download><img className="iconSpacing"  src={process.env.PUBLIC_URL + "/images/MainPage/CV.png" } alt="Main Banner"></img></Link>  
                        <h4 className="footer ">© Copyright 2020 Cindy Jeon</h4>
                    </div> 
                </div>
            </div>
        );
    }
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