import React from 'react';
import Content from "../resources/content";
import "../styles/mobile.css"

const MobileLayout = () => {
   return (
      <div id = "container">
         <div>
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
               <p>Currently building <a target="_blank" className = "myurl blue" href="https://binit.in">BinIt</a></p>
<p>Previously at <a target="_blank" className = "myurl blue" href="https://www.microsoft.com/en-in">Microsoft</a>, <a target="_blank" className = "myurl blue" href = "https://vayu.tech">Vayu</a>, <a target="_blank" className = "myurl blue" href="https://www.paypal.com/us/home">PayPal</a>, <a target="_blank" className = "myurl blue" href="https://freshworks.com">Freshworks</a> and <a target="_blank" className = "myurl blue" href="https://coderdojo.com">CoderDojo</a></p>            </div>
            <hr className="myLine"/>
            <div id = "online">
               <a target="_blank" className = "logoContainer" href = "https://github.com/raghavmecheri"><img className = "logoImage" src = {require("../resources/github.png")} /></a>
               <a target="_blank" className = "logoContainer" style={{ marginLeft: "2px", marginRight: "2px" }} href = "https://www.linkedin.com/in/raghavmecheri/"><img className = "logoImage" src = {require("../resources/linkedin.png")} /></a>
               <a target="_blank" className = "logoContainer" href = "https://www.facebook.com/raghavmecheri"><img className = "logoImage" src = {require("../resources/facebook.png")} /></a>
            </div>
         </div>
         <div>
            <Content />
         </div>
      </div> 
      )
}

export default MobileLayout