import React, { Component } from 'react'

export default class Footer extends Component {
    render(){
        return(            
            <footer style={textSize1} className="footer-copyright text-center footer-green py-3 botton-0 letter-spacing-5">
              <div>
                <a href="/">Cindy Minyoung Jeon</a>
                <span>&copy; 2020 Cindy's Website.</span>
              </div>
              <div className="ml-auto">
                | <span>Powered by</span> Cindy Jeon | Copyright: Cindy Minyoung Jeon, Yoonkun Lee
                |
              </div>
            </footer>
        )
    };
}

var textSize1={
  fontSize: "12px"
}