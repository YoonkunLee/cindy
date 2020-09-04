import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/MainBanner.css"

export default class MainBanner extends Component {
    render(){       
        return(

            <div className="row">
                <div className="col-12 col-md-12 grid" style={bannerStyle}>
                <div className="col-md-12 col-lg-5 float-left container-fluid nopadding">
                    <div className="textStyle">
                        <h1 className="mainbannerfont">Kia Ora</h1>
                        <h4 className="BannerText">I'm Cindy Jeon, a graphic designer living and working in New Zealand.   I love simplistic yet logical appoach with the saying 'design is not just what it looks like and feels like. Design is how is works' as a key influence on my style.</h4>
                    </div>
                </div>
                <Slider className="col-xs-12 col-sm-12 col-lg-7 float-left nopadding  " {...settings}>
                    <div>
                        <img className="centerImage centerImage1" src={ process.env.PUBLIC_URL + "/images/MainPage/banner1.png"} alt="project1"/>
                    </div>
                    <div>
                        <img className="centerImage centerImage2" src={ process.env.PUBLIC_URL + "/images/MainPage/banner2.png"}  alt="project2"/>
                    </div>
                    <div>
                        <img className="centerImage centerImage3" src={ process.env.PUBLIC_URL + "/images/MainPage/banner3.png"}  alt="project3"/>
                    </div>
                </Slider>
                <div>
                    <a href="/#portfolio"><img style={arrowMargin} src={process.env.PUBLIC_URL + '/images/MainPage/Arrowdown.png'} width="50" height="auto" alt="Logo" /></a>
                </div>
            
                </div>
            </div>
        );
    }
}

const settings ={
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    marginRight: "0px",
    fade: true
};

var bannerStyle ={
    display: "block",
    width: "100%",
    height: "auto",
    backgroundSize: 'cover',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/MainPage/background.png' })`,
    backgroundPosition: 'ceter',
    marginBottom: "10px",
    backgroundAttachment: "fixed",
    overflow: "hidden",
    paddingBottom: "50px"
}

var arrowMargin = {
    marginTop: "80px",       
}