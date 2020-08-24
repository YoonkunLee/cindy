import React, { Component } from 'react';
import PortfolioData from '../Data/PortfolioData.json';
import { LazyLoadImage }from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default class PortfolioDetail extends Component {
    render(){
        
        var itemNo;
        for(var i=0; i<PortfolioData.length; i++){
            if(PortfolioData[i].name == this.props.match.params.id){
                itemNo = i
            }
        }

        return(
            <div className="overflow-hidden">
                <div class="list">
                    {PortfolioData[itemNo].images.map((image) =>{
                        return <LazyLoadImage alt={image.alt} width="100%" effect="opacity" key={image.key} src={ process.env.PUBLIC_URL + image}></LazyLoadImage>
                    })}
                </div>
            </div>
        );       
    }
}