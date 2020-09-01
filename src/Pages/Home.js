import React, { Component }from 'react';
import MainBanner from '../Components/MainBanner';
import Portfolio from '../Components/MainPortfolio';
import AboutMe from '../Components/AboutMe';
import Contact from '../Components/Contact';

export default class Home extends Component {
    render(){
        return(
            <div className="container-fluid">                      
                <div>
                    <MainBanner />
                    <section style={ size } title="portfolio" id="portfolio">
                        <Portfolio />
                    </section> 
                    <section style={ size } title="aboutMe" id="aboutMe">
                        <AboutMe />
                    </section>    
                    <section style={ size } title="contact" id="contact">
                        <Contact />
                    </section> 
                </div>       
            </div>
        );
    }
}

var size = {
    width :"100%",
    height: 'auto'
}