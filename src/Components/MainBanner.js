import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/MainBanner.css"

export default class MainBanner extends Component {
    render(){       
        return(

            <div className="row">
                <div className="col-12 col-xl-12 col-md-12 nopadding" >                   
                    <Slider className="col-xl-7 float-right nopadding overflow-hidden" {...settings}>
                        <div>
                            <img className="centerImage centerImage1" src={ process.env.PUBLIC_URL + "/images/MainPage/HomeBanner2.jpg"} alt="project1"/>
                        </div>
                        <div>
                            <img className="centerImage centerImage2" src={ process.env.PUBLIC_URL + "/images/MainPage/HomeBanner1.jpg"}  alt="project2"/>
                        </div>
                        <div>
                            <img className="centerImage centerImage3" src={ process.env.PUBLIC_URL + "/images/MainPage/HomeBanner3.jpg"}  alt="project3"/>
                        </div>
                    </Slider>
                    <div className="col-xl-5 col-md-12 col-sm-12">
                        <div className="mainTextBox">
                            <h1 className="mainBannerFont">Kia Ora</h1>
                            <h4 className="bannerText">I'm Cindy Jeon, a graphic designer living and working in New Zealand.   I love simplistic yet logical appoach with the saying 'design is not just what it looks like and feels like. Design is how it works' as a key influence on my style.</h4>
                        </div>
                    </div>    
                     
                </div> 
  
                {/* <Slider className="slider" {...settings}>
                    <div>
                        <img className="centerImage" src={ process.env.PUBLIC_URL + "/images/MainPage/MainBanner1.png"} alt="project1"/>
                        <div className="mainTextBox">
                            <h1 className="mainBannerFont">Kia Ora</h1>
                            <h4 className="bannerText">I'm Cindy Jeon, a graphic designer living and working in New Zealand.   I love simplistic yet logical appoach with the saying 'design is not just what it looks like and feels like. Design is how is works' as a key influence on my style.</h4>
                        </div>
                        <a  className="arrow" href="/#portfolio"><img className="arrowSize" src={process.env.PUBLIC_URL + '/images/MainPage/Arrowdown.png'} height="auto" alt="Logo" /></a>                     
                    </div>
                    <div>
                        <img className="centerImage" src={ process.env.PUBLIC_URL + "/images/MainPage/MainBanner2.png"}  alt="project2"/>
                        <div className="mainTextBox">
                            <h1 className="mainBannerFont">Kia Ora</h1>
                            <h4 className="bannerText">I'm Cindy Jeon, a graphic designer living and working in New Zealand.   I love simplistic yet logical appoach with the saying 'design is not just what it looks like and feels like. Design is how is works' as a key influence on my style.</h4>
                        </div> 
                        <a  className="arrow" href="/#portfolio"><img className="arrowSize" src={process.env.PUBLIC_URL + '/images/MainPage/Arrowdown.png'} height="auto" alt="Logo" /></a>                       
                    </div>
                    <div>
                        <img className="centerImage" src={ process.env.PUBLIC_URL + "/images/MainPage/MainBanner3.png"}  alt="project3"/>
                        <div className="mainTextBox">
                            <h1 className="mainBannerFont">Kia Ora</h1>
                            <h4 className="bannerText">I'm Cindy Jeon, a graphic designer living and working in New Zealand.   I love simplistic yet logical appoach with the saying 'design is not just what it looks like and feels like. Design is how is works' as a key influence on my style.</h4>
                        </div>   
                        <a  className="arrow" href="/#portfolio"><img className="arrowSize" src={process.env.PUBLIC_URL + '/images/MainPage/Arrowdown.png'} height="auto" alt="Logo" /></a>                     
                    </div>                 
                </Slider> */}
               
            </div>
        );
    }
}

const settings ={
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: true,
    marginRight: "0px",
};