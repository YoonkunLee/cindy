import React, { Component }from 'react';
import MainBanner from '../Components/MainBanner';
import Portfolio from '../Components/MainPortfolio';
import Contact from '../Components/Contact';

export default class Home extends Component {
    render(){
        return(
            <div className="container-fluid">                
                <MainBanner />  
                <div style={ size } id="portfolio">
                    <Portfolio />
                </div>   
                <div id="contact">
                    <Contact />
                </div>
            </div>
        );
    }
}

var size = {
    width :"100%",
    height: 'auto'
}