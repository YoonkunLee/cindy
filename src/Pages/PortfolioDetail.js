import React, { Component } from 'react';
import PortfolioData from '../Data/PortfolioData.json'
export default class PortfolioDetail extends Component {
    render(){
        
        var itemNo;
        for(var i=0; i<PortfolioData.length; i++){
            if(PortfolioData[i].name == this.props.match.params.id){
                itemNo = i
            }
        }

        return(
            <div>
                <div>
                    <h1>{PortfolioData[itemNo].name}</h1>
                    {PortfolioData[itemNo].images.map((value) =>{
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