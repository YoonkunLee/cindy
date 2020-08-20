import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Thumbnail1 from '../images/MainPage/Thumbnail1.jpg'
import Thumbnail2 from '../images/MainPage/Thumbnail2.jpg'
import Thumbnail4 from '../images/MainPage/Thumbnail4.jpg'
import Thumbnail5 from '../images/MainPage/Thumbnail5.jpg'
import Thumbnail6 from '../images/MainPage/BrandGuideline.jpg'
import Thumbnail7 from '../images/MainPage/Creambly.jpg'
import '../CSS/MainPortfolio.css'

export default class Portfolio extends Component {
    render(){
        return (
            <div class="container-fluid">
                <h1 style={PortfolioText}>PORTFOLIO</h1>
                <div class="row">
                    <div class="grid">
                        <figure class="effect-lily">
                            <img src={Thumbnail7} alt="img12"/>
                            <figcaption>
                                <div>
                                    <h2>Creambly</h2>
                                </div>
                                <Link to={"../PortfolioDetail/" + 0} activeClassName={"active"}></Link>
                            </figcaption>			
                        </figure>
                        <figure class="effect-lily">
                            <img src={Thumbnail1} alt="img12"/>
                            <figcaption>
                                <div>
                                    <h2>LucidStand</h2>
                                </div>
                                <a href="../PortfolioDetail/LucidStand"></a>
                            </figcaption>			
                        </figure>
                        <figure class="effect-lily">
                            <img src={Thumbnail2} alt="img12"/>
                            <figcaption>
                                <div>
                                    <h2>IPA</h2>
                                </div>
                                <a href="../PortfolioDetail/LucidStand"></a>
                            </figcaption>			
                        </figure>
                        <figure class="effect-lily">
                            <img src={Thumbnail4} alt="img12"/>
                            <figcaption>
                                <div>
                                    <h2>Anual Report</h2>
                                </div>
                                <a href="../PortfolioDetail/LucidStand"></a>
                            </figcaption>			
                        </figure>
                        <figure class="effect-lily">
                            <img src={Thumbnail5} alt="img12"/>
                            <figcaption>
                                <div>
                                    <h2>Conferenz EDM</h2>
                                </div>
                                <a href="../PortfolioDetail/LucidStand"></a>
                            </figcaption>			
                        </figure>
                        <figure class="effect-lily">
                            <img src={Thumbnail6} alt="img12"/>
                            <figcaption>
                                <div>
                                    <h2>Brand Guideline</h2>
                                </div>
                                <a href="../PortfolioDetail/LucidStand"></a>
                            </figcaption>			
                        </figure>
                    </div>                   
                </div>
            </div>     
        );
    }
}

var PortfolioText = {
    marginTop: "150px",
    textAlign: "center",
    marginBottom: "50px"
}