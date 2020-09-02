import React, { Component } from 'react';
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
                        <img  style={spacing} src={process.env.PUBLIC_URL + "/images/MainPage/Projects.png" } width="140px" alt="Main Banner"></img> 
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
                                        <div style={textBox}>
                                            <div style={textStyleTitle} className="header aboutTitle">About Project</div>       
                                            <div style={textStyleBody} className="body aboutText">{PortfolioData[this.state.id].about}</div>
                                        </div>                                                       
                                        <div className="list">                                                                                
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

const customStyles = {
    display: "block !important",
    overflowY: "auto",   
    width: "80%",
    height: "auto",
    marginTop: "160px"
};

var spacing ={
    marginBottom: "100px",
    marginTop: "120px"
}

var textStyleTitle={
    fontSize: "50px",
    textAlign: "left",
    marginBottom: "40px"
}

var textStyleBody={
    fontSize: "20px",
    textAlign: "left"
}

var textBox={
    margin: "150px"
}