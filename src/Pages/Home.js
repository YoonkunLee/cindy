import React, { Component }from 'react';
import MainBanner from '../Components/MainBanner';
import Portfolio from '../Components/MainPortfolio';

export default class Home extends Component {
    render(){
        return(
            <div className="container-fluid">                      
                <div>
                    <   MainBanner />
                    <section style={ size } title="portfolio" id="portfolio">
                        <Portfolio />
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