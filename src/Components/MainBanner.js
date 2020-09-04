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
                <div className="col-md-12 col-lg-4 float-left container-fluid">
                    <div style={textStyle}>
                        <h1 className="mainfont font-weight-bold" style= {bannerTitle}>Kia Ora</h1>
                        <h4 className="BannerText font-weight-bold" style= {bannerText}>I'm Cindy Jeon, a graphic designer living and working in New Zealand.   I love simplistic yet logical appoach with the saying 'design is not just what it looks like and feels like. Design is how is works' as a key influence on my style.</h4>
                    </div>
                </div>
                <Slider className="col-xs-12 col-sm-12 col-lg-8 float-left" {...settings}>
                    <div>
                        <img src={ process.env.PUBLIC_URL + "/images/MainPage/banner1.png"} style={centerImage} alt="project1"/>
                    </div>
                    <div>
                        <img src={ process.env.PUBLIC_URL + "/images/MainPage/banner2.png"} style={centerImage} alt="project2"/>
                    </div>
                    <div>
                        <img src={ process.env.PUBLIC_URL + "/images/MainPage/banner3.png"} style={centerImage} alt="project3"/>
                    </div>
                </Slider>
                <div>
                    <a href="/#portfolio"><img style={arrowMargin} src={process.env.PUBLIC_URL + '/images/MainPage/arrowdown.png'} width="50" height="auto" alt="Logo" /></a>
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

var bannerTitle ={
    font: "normal normal normal Nexa Light",
    paddingBottom: "20px",
    textAlign: "left",
    color: "#225357",
    fontSize: "60px",
    textWeight: "bold"
}
var bannerText ={
    paddingBottom: "20px",
    textAlign: "left",
    color: "#225357",
    font: "normal normal Helvetica Neue",
    fontSize: "25px",
    lineHeight: "1.3"
}

var textStyle={
    paddingTop: "52%",
    letterSpacing: "1.5px",
    paddingLeft: "30px",
    paddingRight: "30px"
}

var arrowMargin = {
    marginTop: "30px",       
}

var centerImage={
    display: "block",
    margin: "auto",
    paddingLeft: "50px",
    paddingTop: "150px",
    width: "auto",
    height: "700px"
}