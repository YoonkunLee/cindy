import React, { Component } from 'react';

export default class AboutMe extends Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="raw grid overflow-hidden"> 
                    <img  style={spacing} src={process.env.PUBLIC_URL + "/images/MainPage/About.png" } width="140px" alt="Main Banner"></img>           
                    <div className="col-12">
                        <div className="col-6 float-left mainfont mt-5 list" style={contactText1}>
                            <h1>Hi I’m Cindy.</h1>
                            <h1>I love creating, formulating,</h1>
                            <h1>organising and thinking.</h1>
                            <h4 className="mt-5">
                                I am a designer with 7 years’ experience in various industries. While my motto is to ’Stay Creative’, 
                                it is still the most challenging status to achieve. However being passionate and motivated to create 
                                the best design solution keeps me close to where I want to be. Whether that be a simple branding, 
                                designing a large scale conference or creating a website I strive to provide excellence in everything I do.
                            </h4>
                        </div>
                        <div className="col-6 float-left list" style={contactText1}>
                            <img style={photoPadding} src={process.env.PUBLIC_URL + "/images/MainPage/ProfilePhoto.png"} width="100%" height="auto" alt="profilePhoto"></img>
                        </div>
                    </div>
                    
                </div>                  
            </div>
        );
    }
}

var contactText1 = {
    textAlign: "left",
    marginBottom: "50px",
    width: "100%"
}

var spacing ={
    marginBottom: "100px",
    marginTop: "120px",
}

var photoPadding ={
    paddingLeft: "40px"
}