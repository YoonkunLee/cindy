import React, { Component } from 'react';
import PortfolioData from '../Data/PortfolioData.json';
import '../CSS/PortfolioDetail.css'


export default class PortfolioDetail extends Component {
    render(){
        function FadeInSection(props) {
            const [isVisible, setVisible] = React.useState(false);
            const domRef = React.useRef();
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


        var itemNo;
        for(var i=0; i<PortfolioData.length; i++){
            if(PortfolioData[i].name === this.props.match.params.id){
                itemNo = i
            }
        }

        return(
            <div className="overflow-hidden">
                <div class="list">
                    {PortfolioData[itemNo].images.map((image) =>{
                        return <FadeInSection key={image}>
                            <img alt={image.alt} width="100%" effect="opacity" key={image.key} src={ process.env.PUBLIC_URL + image}></img>
                        </FadeInSection>                       
                    })}
                </div>
            </div>
        );       
    }
}