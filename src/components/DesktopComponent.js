import React, { Component } from 'react';
import "./DesktopStyle.css"

class DesktopComponent extends Component {
	constructor() {
		super();
	}

	render() {
      return (
		<div id = "container">
         <div id = "left">
            <div id = "headshot">
               <img id = "raghav" src = {require("../resources/raghav.png")} />
               <h2>Raghav Mecheri</h2>
            </div>
            <hr className="myLine"/>
            <div id = "qualifications">
               <p>Computer Science & Applied Math<br />Columbia University<br />School of Engineering & Applied Sciences</p>
            </div>
            <hr className="myLine"/>
            <div id = "experience">
               <p>Currently at <a target="_blank" className = "myurl blue" href="https://binit.in">BinIt</a> and <a target="_blank" className = "myurl blue" href="https://www.microsoft.com/en-in">Microsoft</a> (Incoming)</p>
               <p>Previously with <a target="_blank" className = "myurl blue" href = "https://vayu.tech">Vayu</a>, <a target="_blank" className = "myurl blue" href="https://www.paypal.com/us/home">PayPal</a>, <a target="_blank" className = "myurl blue" href="https://freshworks.com">Freshworks</a> and <a target="_blank" className = "myurl blue" href="https://coderdojo.com">CoderDojo</a></p>
            </div>
            <hr className="myLine"/>
            <div id = "online">
               <a target="_blank" className = "logoContainer" href = "https://github.com/raghavmecheri"><img className = "logoImage" src = {require("../resources/github.png")} /></a>
               <a target="_blank" className = "logoContainer" href = "https://www.linkedin.com/in/raghavmecheri/"><img className = "logoImage" src = {require("../resources/linkedin.png")} /></a>
               <a target="_blank" className = "logoContainer" href = "https://www.facebook.com/raghavmecheri"><img className = "logoImage" src = {require("../resources/facebook.png")} /></a>
            </div>
         </div>
         <div id = "right">
            <div id = "projectContent">
               <h3 id = "header">Projects</h3>
               <p className = "rightContent">
                 <a target="_blank" className = "myurl blue" href = "https://binit.in/wasteClassify">WasteClassify</a>, an AI based automated waste segregation solution with <a target="_blank" className = "myurl blue" href = "https://binit.in">BinIt</a><br />
                 <a target="_blank" className = "myurl blue" href = "https://www.chennaivolunteers.org">Chennai Volunteers</a>, an online micro-volunteering portal for the city of Chennai with the <a target="_blank" className = "myurl blue" href = "https://givingmatters.in">Giving Matters Foundation</a><br />
                 <a target="_blank" className = "myurl blue" href = "https://pricemydata.com">PriceMyData</a>, an online platform for crowdsourcing data valuations <br />
                 <a target="_blank" className = "myurl blue" href = "https://github.com/raghavmecheri/GenerateRubric">GenerateRubric</a>, a solution to autogenerate grading rubrics for instructors and teaching assistants <br />
                 <a target="_blank" className = "myurl blue" href = "https://www.slideshare.net/slideshow/embed_code/key/fBotytSv48MnSa">Porting BIM Models to low-cost Virtual Reality</a> - built @ <a target="_blank" className = "myurl blue" href="https://www.iitm.ac.in/">IIT, Madras</a> under Prof. Ashwin Mahalingam<br />
                 <a target="_blank" className = "myurl blue" href="https://www.npmjs.com/package/mongopooler">MongoPooler</a>, an npm module to make MongoDB access easier and more efficient <br />
                 CubeMania, a mobile application built to help people solve the Rubik's Cube - built with Kunal Agarwal<br />
                 <a target="_blank" className = "myurl blue" href="https://github.com/LionBaseNYC/LiStartup">LiStartup</a>, an ML/AI solution to predict startup valuations - built with <a target="_blank" className = "myurl blue" href = "https://www.lionbase.nyc/">LionBase</a><br />
                 An analysis of <a target="_blank" className = "myurl blue" href = "https://github.com/raghavmecheri/SoccerAnalysis">soccer transfers</a> in order to understand if player valuations can be predicted<br />
                 <a target="_blank" className = "myurl blue" href="https://github.com/cseg-tech/nyc-housingautomation">Web application</a> to aggregate and analyse housing complaints in NYC - built with <a target="_blank" className = "myurl blue" href="http://www.columbiaseg.org/cseg-tech">CSEG Tech</a><br />
                 <a target="_blank" className = "myurl blue" href="https://github.com/Maxusmusti/LectureHub">LectureHub</a>, a web based note-sharing platform for students - built with Mustafa Eyeceoz, Ajit Akole & Daniel Tao<br />
                 An <a target="_blank" className = "myurl blue" href="https://github.com/raghavmecheri/FilterSpam">NLP based classification system</a>, which is able to identify spam text messages<br />
                 MyCity, a complaint submission and management system for Indian cities - built with Kunal Agarwal
               </p>
               <br />
               <h3 id = "header">Activities</h3>
               <p className = "rightContent">
                 Team Lead at <a target="_blank" className = "myurl blue" href = "https://binit.in">BinIt</a>, an AI startup focussed on solving the world's waste segregation problems<br />
                 Teaching Assistant for COMS W3101 - Programming in JavaScript with <a target="_blank" className = "myurl blue" href = "https://www.slideshare.net/slideshow/embed_code/key/fBotytSv48MnSa">Prof. Ramana Isukapalli</a><br />
                 Check out <a target="_blank" className = "myurl blue" href="https://www.columbiadpi.com/">DPI</a>, <a target="_blank" className = "myurl blue" href="https://www.lionbase.nyc/">LionBase</a>, <a target="_blank" className = "myurl blue" href="http://www.columbiaseg.org/">CSEG</a>, <a target="_blank" className = "myurl blue" href="https://columbiainternationalventures.com/">CIV</a>, and <a target="_blank" className = "myurl blue" href="https://www.grcglobalgroup.com/">GRC</a><br />
                 View my courses completed, and currently being taken <a target="_blank" href="https://docs.google.com/document/d/1t84U6M0rCwHoXMBqXBh3OmVXqOs6WBZoRKjm7NoZDT8/edit?usp=sharing" className="myurl blue">here</a>
               </p>
               <br />
               <h3 id ="header">Contact Me</h3>
               <p className = "rightContent">
                 I'm always open to discussing new ideas and developments in fields both related, and unrelated to technology!<br />
                 Aside from my presence online, please feel free to drop me an email anytime at <a target="_blank" href="mailto:raghav.mecheri@columbia.edu" className ="myurl blue">raghav.mecheri@columbia.edu</a><br />
               </p>
            </div>
         </div>
      </div> 
      )
	}
}

export default DesktopComponent