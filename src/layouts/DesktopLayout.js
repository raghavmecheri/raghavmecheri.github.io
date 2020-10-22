import React, { Component } from 'react';
import Content from "../resources/content";
import "../styles/desktop.css"

class DesktopLayout extends Component {
	constructor() {
		super();
	}

	render() {
      return (
		<div id = "container" style={{ overflow: "hidden" }}>
         <div id = "left">
            <div id = "headshot">
               <img id = "raghav" src = {require("../resources/raghav.png")} />
               <h2 style={{ textAlign: "center" }}>Raghav Mecheri</h2>
            </div>
            <hr className="myLine"/>
            <div id = "qualifications">
               <p>Computer Science & Applied Math<br />Columbia University<br />School of Engineering & Applied Sciences</p>
            </div>
            <hr className="myLine"/>
            <div id = "experience">
               <p>Currently at <a target="_blank" className = "myurl blue" href="https://binit.in">BinIt</a>, <a target="_blank" className = "myurl blue" href="http://www.cs.columbia.edu/~ansaf/cing/index.html">CING</a>, and <a target="_blank" className = "myurl blue" href="https://www.microsoft.com/en-in">Microsoft</a> (Incoming)</p>
               <p>Previously with <a target="_blank" className = "myurl blue" href = "https://vayu.tech">Vayu</a>, <a target="_blank" className = "myurl blue" href="https://www.paypal.com/us/home">PayPal</a>, <a target="_blank" className = "myurl blue" href="https://freshworks.com">Freshworks</a> and <a target="_blank" className = "myurl blue" href="https://coderdojo.com">CoderDojo</a></p>
            </div>
            <hr className="myLine"/>
            <div id = "online">
               <a target="_blank" className = "logoContainer" href = "https://github.com/raghavmecheri"><img className = "logoImage" src = {require("../resources/github.png")} /></a>
               <a target="_blank" className = "logoContainer" style={{ marginLeft: "5px", marginRight: "5px" }} href = "https://www.linkedin.com/in/raghavmecheri/"><img className = "logoImage" src = {require("../resources/linkedin.png")} /></a>
               <a target="_blank" className = "logoContainer" href = "https://www.facebook.com/raghavmecheri"><img className = "logoImage" src = {require("../resources/facebook.png")} /></a>
            </div>
         </div>
         <div id = "right" style={{ overflowY: "auto", height: "95vh" }}>
            <Content />
         </div>
      </div> 
      )
	}
}

export default DesktopLayout