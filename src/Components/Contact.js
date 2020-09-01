import React, { Component } from 'react';
import '../CSS/contact.css'

export default class Contact extends Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="grid1">
                    <h2 style={contactText1}>CONTACT</h2>
                    <figure className="effect-winston">
                        <img src={process.env.PUBLIC_URL + '/images/MainPage/contact.jpg' } alt=""></img> 
                        <figcaption>
                            <h2>Cindy <span>Jeon</span></h2>
                            <h2>Learn<span>More about me?</span></h2>                           
                        </figcaption>			
                    </figure>
                </div>
            </div>
        );
    }
}

var contactText1 = {
    marginTop: "150px",
    textAlign: "center",
    marginBottom: "50px"
}