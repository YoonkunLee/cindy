import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/MainPortfolio.css'
import mainPageData from '../Data/MainPageData.json'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';
import PortfolioData from '../Data/PortfolioData.json'

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: 0,
            visible: false };       
      }

      hide() {
        this.setState({ visible: false });
      }
      setId(ids) {
          this.setState({ id: ids });
      }
      show = value =>() =>{
          this.setState({ id: value, visible: true})
      }

    render(){
        return (
            <div className="container-fluid ">
                <div className="row overflow-hidden">                   
                    <div className="grid">
                        {mainPageData.map((main) =>{
                            return <div><figure className="effect-lily">
                                <img  src={process.env.PUBLIC_URL + main.image } alt="Main Banner"></img> 
                                <figcaption onClick={this.show(main.id)} id={main.id}>
                                        <div>
                                            <h2>{main.name}</h2>                                        
                                        </div>           
                                    </figcaption>	
                                </figure>
                                <Rodal customStyles={customStyles} visible={this.state.visible} onClose={this.hide.bind(this)}>
                                    <div className="overflow-hidden">                                                  
                                        <div className="list">           

                                            <div className="header position-fixed">{PortfolioData[this.state.id].name}</div> 
                           
                                            {PortfolioData[this.state.id].images.map((image) =>{                                               
                                                return <img alt={image.alt} width="100%" effect="opacity" key={image.key} src={ process.env.PUBLIC_URL + image}></img>
                                            })}                                            
                                        </div>
                                    </div>
                                </Rodal>
                            </div>
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

const customStyles = {
    display: "block !important",
    overflowY: "auto",   
    width: "80%",
    height: "auto",
    marginTop: "160px"
};

const customStyle = {
    width: "100px"
}