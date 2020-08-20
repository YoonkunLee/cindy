import React, { Component } from 'react';
import PortfolioData from '../Porfolio/PortfolioData.json'
export default class PortfolioDetail extends Component {
    render(){
        return(
            <div>
                <p>{this.props.params.id}</p>
                {PortfolioData[0].name}
                <h1>This is Portfolio Detail Page</h1>
            </div>
        );
    }
}