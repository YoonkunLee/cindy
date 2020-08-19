import React, { Component } from 'react';
import contact from '../images/MainPage/contact.jpg'
import '../CSS/contact.css'

export default class Contact extends Component {
    render(){
        return (
            // <div>
            //     <h2>Contact</h2>
            //     <h4>Email: minyoung307@gamil.com</h4>

            //     <button>Contact Now</button>
            // </div>
            <div class="container-fluid">
                <h2>Contact</h2>
                <div class="grid1">
                    <figure class="effect-winston">
                        <img src={contact} alt="img30"/>
                        <figcaption>
                            <h2>Cindy <span>Jeon</span></h2>
                            <h2>Learn<span>More about me?</span></h2>                           
                            <p>
                                <a href="#"><i class="fa fa-fw fa-star-o"></i></a>
                                <a href="#"><i class="fa fa-fw fa-comments-o"></i></a>
                                <a href="#"><i class="fa fa-fw fa-envelope-o"></i></a>
                            </p>
                        </figcaption>			
                    </figure>
                </div>
            </div>
        );
    }
}