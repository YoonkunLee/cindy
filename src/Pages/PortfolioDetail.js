import React, { Component } from 'react';
import PortfolioData from '../Data/PortfolioData.json'
export default class PortfolioDetail extends Component {
    render(){
        return(
            <div>
                <div>
                    <h1>{PortfolioData[this.props.match.params.id].name}</h1>
                    {PortfolioData[this.props.match.params.id].images.map((value) =>{
                        return <img style={style1} src={ process.env.PUBLIC_URL + value}></img>
                    })}
                </div>
            </div>
        );       
    }
}

var style1={
    width:"100%",
    height: "auto",
}