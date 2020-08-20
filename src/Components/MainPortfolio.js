import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Thumbnail1 from '../images/MainPage/Thumbnail1.jpg'
import Thumbnail2 from '../images/MainPage/Thumbnail2.jpg'
import Thumbnail3 from '../images/MainPage/Thumbnail3.jpg'
import Thumbnail4 from '../images/MainPage/Thumbnail4.jpg'
import Thumbnail5 from '../images/MainPage/Thumbnail5.jpg'
import project1 from '../images/Project 1/Thumbnail.jpg'
import '../CSS/MainPortfolio.css'

export default class Portfolio extends Component {
    render(){
        return (
            <div class="container-fluid">
                <h1>Portfolio</h1>
                <div class="row">
                    <div class="grid">
                        <figure class="effect-lily">
                            <img src={Thumbnail1} alt="img12"/>
                            <figcaption>
                                <div>
                                    <h2>LucidStand</h2>
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
                            <img src={Thumbnail1} alt="img12"/>
                            <figcaption>
                                <div>
                                    <h2>LucidStand</h2>
                                </div>
                                <a href="../PortfolioDetail/LucidStand"></a>
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
                            <img src={Thumbnail1} alt="img12"/>
                            <figcaption>
                                <div>
                                    <h2>LucidStand</h2>
                                </div>
                                <a href="../PortfolioDetail/LucidStand"></a>
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
                    </div>                   
                </div>
            </div>     
        );
    }
}

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);
  
    return (
      <img  class="col-md-6 pl-0 pr-0 float-left"
        onMouseOver={() => {
          imageRef.current.src = secondaryImg;
        }}
        onMouseOut={() => {
          imageRef.current.src= primaryImg;
        }}
        src={primaryImg} 
        alt=""
        ref={imageRef}
      />
    )
  }

  const ImageChangeOnMouseOver = () => {
    return (
      <div class="col-md-12 pl-0 pr-0 overflow-hidden float-left ">
        <ImageToggleOnMouseOver 
          primaryImg={Thumbnail1}
          secondaryImg={Thumbnail2}
          alt="" />
        <ImageToggleOnMouseOver
          primaryImg={Thumbnail4}
          secondaryImg={Thumbnail5}
          alt="" />
      </div>
    )
  }
  