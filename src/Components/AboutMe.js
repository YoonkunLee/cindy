import React, { Component } from 'react';

export default class AboutMe extends Component {
    render(){
        return (
            <div className="container-fluid ">
                <div className="row overflow-hidden">           
                    <div style={contactText1}>
                        <h1>This is Me</h1>
                        <h4>Come oh</h4>
                    </div>
                </div>                  
            </div>
        );
    }
}

var contactText1 = {
    marginTop: "150px",
    textAlign: "center",
    marginBottom: "50px",
    width: "100%"
}