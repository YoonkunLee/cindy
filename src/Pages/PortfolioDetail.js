import React, { Component } from 'react';
import {browserHistory} from 'react-router-dom';
import PortfolioData from '../Porfolio/PortfolioData.json'
export default class PortfolioDetail extends Component {
    
    // loadImage = () => {
    //     let images = []
    
    //     for (let i = 0; i < this.props.match.params.id.images.length; i++) {
    //       images.push("<img style={style1} src={process.env.PUBLIC_URL" +
    //          this.props.match.params.id.images[i]
    //      )
    //     }
    //     return images
    //   }
    
    // render(){
    //     return(
    //         <div>
    //             <div>
    //                 {PortfolioData[this.props.match.params.id].name}
    //                 <div>
    //                     {this.loadImage()}
    //                 </div>
    //             </div>
    //         </div>
    //     );
    
    render(){
        return(
            <div>
                <div>
                    <h1>{PortfolioData[this.props.match.params.id].name}</h1>
                    <img style={style1} src={process.env.PUBLIC_URL + '/images/Project 2/1.png' }></img> 
                    <img style={style1} src={process.env.PUBLIC_URL + '/images/Project 2/2.png' }></img> 
                    <img style={style1} src={process.env.PUBLIC_URL + '/images/Project 2/2-2.gif' }></img> 
                </div>
            </div>
        );

        
    }
}

var style1={
    width:"100%",
    height: "auto",
}