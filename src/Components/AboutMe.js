import React, { Component } from 'react';
import '../CSS/AboutMe.css'

export default class AboutMe extends Component {
    render(){
        return (
                <div className="overflow-hidden"> 
                    <img className="aboutimagespacing" src={process.env.PUBLIC_URL + "/images/MainPage/About.png" } width="140px" alt="Main Banner"></img>           
                    <div className="col-12 col-md-12 ">
                        <div className="col-xl-6 col-lg-12 col-md-12 overflow-hidden AboutFont mt-5 aboutmaxwidth">
                            <div>
                                <h1 className="titlefontsize">Hi I’m Cindy.</h1>
                                <h1 className="titlefontsize">I love creating, formulating,</h1>
                                <h1 className="titlefontsize">organising and thinking.</h1>
                            </div>                           
                            <h4 className="bodyfontsize mt-5">
                                I am a designer with 7 years’ experience in various industries. While my motto is to ’Stay Creative’, 
                                it is still the most challenging status to achieve. However being passionate and motivated to create 
                                the best design solution keeps me close to where I want to be. Whether that be a simple branding, 
                                designing a large scale conference or creating a website I strive to provide excellence in everything I do.
                            </h4>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 aboutmaxwidth" >
                            <img className="photoPadding" src={process.env.PUBLIC_URL + "/images/MainPage/ProfilePhoto.png"} width="100%" height="auto" alt="profilePhoto"></img>
                        </div>
                    </div>                 
            </div>
        );
    }
}

