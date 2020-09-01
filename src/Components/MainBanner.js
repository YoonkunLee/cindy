import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MainBanner extends Component {
    render(){
        const settings ={
            dots: true,
            arrows: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            
            lazyLoad: true,
            marginRight: "0px",
        };


        return(
            // <div style={bannerStyle}>
            //     <div style={bannerText}>
            //         <h1>Welcome to Cindy's Website</h1>
            //         <h3>Senior Designer</h3>
            //     </div>              
            //     <div style={bannerButton}>
            //         <a href="/#aboutMe" className="btn btn-outline-light btn-lg ">Learn More</a> 
            //     </div>
            // </div>
            
                <div className="col-12" style={bannerStyle}>
                    <div className="col-5 float-left container-fluid" >
                        <div style={textStyle}>
                            <h1 style= {bannerTitle}>Kia Ora</h1>
                            <h5 style= {bannerText}>I'm Cindy Jeon, a graphic designer living and working in New Zealand.   I love simplistic yet logical appoach with the saying 'design is not just what it looks like and feels like. Design is how is works' as a key influence on my style.</h5>
                        </div>
                    </div>
                    <Slider className="col-7 float-left" {...settings}>
                        <div>
                            <img src={ process.env.PUBLIC_URL + "/images/MainPage/banner1.png"} style={centerImage}/>
                        </div>
                        <div>
                            <img src={ process.env.PUBLIC_URL + "/images/MainPage/banner2.png"} style={centerImage}/>
                        </div>
                        <div>
                            <img src={ process.env.PUBLIC_URL + "/images/MainPage/banner3.png"} style={centerImage}/>
                        </div>
                    </Slider>
                </div>
        );
    }
}

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
    paddingBottom: "70px"

}

var bannerTitle ={
    font: "normal normal normal Nexa Light",
    paddingBottom: "20px",
    textAlign: "left",
    color: "#225357",
    marginLeft: "60px",
}
var bannerText ={
    paddingBottom: "20px",
    textAlign: "left",
    color: "#225357",
    marginLeft: "60px",
    font: "normal normal Helvetica Neue",
    fontSize: "18px",
    lineHeight: "1.6"
}

var textStyle={
    paddingTop: "50%"
}

var imagePadding = {
    paddingTop: "25px",     
}

var bannerImage ={
    width: "auto",
    height: "600px",
    position: "center"
}

var centerImage={
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "auto",
    height: "600px",
    paddingTop: "100px"
}