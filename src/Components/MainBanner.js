import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainBanner1 from '../images/MainPage/mainBanner1.JPG';

export default class MainBanner extends Component {
    render(){
        return(
            <div style={bannerStyle}>
                <div style={bannerText}>
                    <h1>Welcome to Cindy's Website</h1>
                    <h3>Senior Designer</h3>
                </div>              
                <div style={bannerButton}>
                    <Link to="./AboutMe" class="btn btn-outline-light btn-lg ">Learn More</Link>
                </div>
            </div>     
        );
    }
}

var bannerStyle ={
    width: "100%",
    height: "auto",
    backgroundSize: 'cover',
    backgroundImage: `url(${mainBanner1})`,
    backgroundPosition: 'ceter',
    marginBottom: "10px"
}

var bannerText ={
    paddingTop: "200px",
    paddingBottom: "100px",
    textAlign: "center",
    color: "white"
}

var bannerButton = {
    paddingTop: "50px",   
    paddingBottom: "50px",  
    textAlign: "center"       
}