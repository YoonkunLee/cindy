import React, { Component } from 'react';
import PortfolioData from '../Data/PortfolioData.json';

export default class PortfolioDetail extends Component {
    render(){
        
        var itemNo;
        for(var i=0; i<PortfolioData.length; i++){
            if(PortfolioData[i].name === this.props.match.params.id){
                itemNo = i
            }
        }

        return(
            <div className="overflow-hidden">
                <div class="list">
                    {PortfolioData[itemNo].images.map((image) =>{
                        return <img alt={image.alt} width="100%" effect="opacity" key={image.key} src={ process.env.PUBLIC_URL + image}></img>
                    })}
                </div>
            </div>
        );       
    }
}