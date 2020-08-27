import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/MainPortfolio.css'
import mainPageData from '../Data/MainPageData.json'

export default class Portfolio extends Component {
    render(){
        return (
            <div class="container-fluid ">
                <div class="row className= overflow-hidden">                   
                    <div className="grid">
                        <h1 style={PortfolioText1}>PORTFOLIO</h1>
                        {mainPageData.map((main) =>{
                            return <figure class="effect-lily">
                                <img src={process.env.PUBLIC_URL + main.image } alt="Main Banner"></img> 
                                <figcaption>
                                    <div>
                                        <h2>{main.name}</h2>
                                    </div>
                                    <Link to={"../PortfolioDetail/" + main.name} activeClassName={"active"}></Link>
                                </figcaption>			
                            </figure>
                        })}
                    </div>
                </div>
            </div> 
        );
    }
}

var PortfolioText1 = {
    marginTop: "150px",
    textAlign: "center",
    marginBottom: "50px"
}