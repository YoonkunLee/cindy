import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/MainPortfolio.css'
import mainPageData from '../Data/MainPageData.json'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';
import PortfolioData from '../Data/PortfolioData.json';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: 0,
            visible: false };       
      }
      hide() {
        this.setState({ visible: false });
        document.getElementById("nav").style.display = "block";
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
      }
      setId(ids) {
          this.setState({ id: ids });
      }
      show = value =>() =>{
          this.setState({ id: value, visible: true})
          document.getElementById("nav").style.display = "none";         
          document.body.style.overflow = "hidden";
          document.documentElement.style.overflow = "hidden";
      }

      


    render(){
        return (
            <div className="body">
                <div className="row">                   
                    <div className="overflow-hidden">                       
                        <img className="projectIcon" src={process.env.PUBLIC_URL + "/images/MainPage/Projects.png" } width="140px" alt="Main Banner"></img> 
                        <div className="col-12 col-md-12">
                        {mainPageData.map((main) =>{
                            return<div className="col-lg-6 col-md-12 col-sm-12 float-left nopadding"><figure className="effect-lily">
                                <img src={process.env.PUBLIC_URL + main.image } alt="Main Banner"></img> 
                                <figcaption  onClick={this.show(main.id)} id={main.id}>
                                        <div>
                                            <h2>{main.name}</h2>                                        
                                        </div>           
                                    </figcaption>	
                                </figure>
                                <Rodal customStyles={customStyles} visible={this.state.visible} onClose={this.hide.bind(this)}>
                                    <div className="overflow-hidden">         
                                        <div className="popuptextmargin">
                                            <div className="textStyleTitle">About Project</div>       
                                            <div className="textStyleBody">{PortfolioData[this.state.id].subhedding}</div><br/>
                                            <div className="textStyleBody">{PortfolioData[this.state.id].about}</div><br/>
                                            <div className="textStyleBody">{PortfolioData[this.state.id].projectDetail1}</div>
                                            <div className="textStyleBody">{PortfolioData[this.state.id].projectDetail2}</div>                                                                                      
                                        </div>                                                       
                                        <div className="list">                                                                                
                                            {PortfolioData[this.state.id].images.map((image) =>{  
                                                if(image === "/images/Genless/Genless3.jpg"){
                                                    return <FadeInSection> 
                                                        <div className="popuptextmargin textStyleBody">I believe creating a storyline was the key factor of this brief. My solution of how to use this 3-5frames to market the buyers guide was to have a simple Q&A. I read through the guide thoroughly and picked 2 useful info that I believe are one of the common questions or thoughts that most people would have, especially the ones who never experienced EV before. So the first and the third frame throw questions and the second and the fourth frame answers to it. The last frame as you can see below is the call to action message condensing the fact that there is an EV guide available with more details online.</div>
                                                        <img alt={image.alt} width="100%" effect="opacity" key={image.key} src={ process.env.PUBLIC_URL + "/images/Genless/Genless3.jpg"}></img>
                                                    </FadeInSection>                                                    
                                                }   
                                                else if(image === "/images/Genless/Genless5.jpg"){
                                                    return <FadeInSection>
                                                        <img alt={image.alt} width="100%" effect="opacity" key={image.key} src={ process.env.PUBLIC_URL + "/images/Genless/Genless5.jpg"}></img>
                                                        <video autoPlay loop controls className="maxwidth" src={process.env.PUBLIC_URL + PortfolioData[this.state.id].video}></video>       
                                                    </FadeInSection>                                                                            
                                                }
                                                else{
                                                    return <FadeInSection key={image}><img className="marginbottom" alt={image.alt} width="100%" effect="opacity" key={image.key} src={ process.env.PUBLIC_URL + image}></img>
                                                    </FadeInSection>
                                                    
                                                }                                                                                  
                                            })} 
                                                        
                                        </div>   
                                    </div>               
                                </Rodal>
                            </div>
                        })}
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

const customStyles = {
    display: "block !important",
    overflowY: "auto",   
    width: "85%",
    height: "auto",
    marginTop: "40px",
    marginBottom: "30px",
    padding: "0px"
};


function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    if(setVisible !== true){}
    React.useEffect(() => {      
            const observer = new IntersectionObserver(entries => {               
                entries.forEach(entry => setVisible(entry.isIntersecting));
            }); 
          observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }