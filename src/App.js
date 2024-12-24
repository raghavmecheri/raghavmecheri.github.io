import React from 'react';
import Content from "./resources/content";
import Dropouts from "./posts/dropouts";
import WorkHours from "./posts/workhours";
import { BrowserRouter, Routes, Route } from "react-router";

const Home = () => (
  <div id="container" style={{ overflow: "hidden" }}>
    {/* Left Column */}
    <div id="left">
      {/* Profile Section */}
      <div id="headshot">
        <img 
          id="raghav" 
          src={require("./resources/raghav.jpeg")} 
        />
        <h2 style={{ textAlign: "center" }}>
          Raghav Mecheri
        </h2>
      </div>

      <hr className="myLine" />

      {/* Experience Section */}
      <div id="experience">
        <p>
          Currently building <a target="_blank" className="myurl blue" href="https://visia.ai">
            Visia
          </a>
        </p>
        <p>
          Previously at{" "}
          <a target="_blank" className="myurl blue" href="https://www.microsoft.com/en-in">
            Microsoft
          </a>,{" "}
          <a target="_blank" className="myurl blue" href="https://vayu.tech">
            Vayu
          </a>,{" "}
          <a target="_blank" className="myurl blue" href="https://www.paypal.com/us/home">
            PayPal
          </a>,{" "}
          <a target="_blank" className="myurl blue" href="https://freshworks.com">
            Freshworks
          </a>{" "}
          and{" "}
          <a target="_blank" className="myurl blue" href="https://coderdojo.com">
            CoderDojo
          </a>
        </p>
      </div>

      <hr className="myLine" />

            {/* Education Section */}
    <div id="qualifications">
        <p>
          Computer Science & Math @ Columbia<br />
        </p>
      </div>

      <hr className="myLine" />

      {/* Social Links */}
      <div id="online">
        <a target="_blank" className="logoContainer" href="https://github.com/raghavmecheri">
          <img className="logoImage" src={require("./resources/github.png")} />
        </a>
        <a 
          target="_blank" 
          className="logoContainer" 
          style={{ marginLeft: "5px", marginRight: "5px" }} 
          href="https://www.linkedin.com/in/raghavmecheri/"
        >
          <img className="logoImage" src={require("./resources/linkedin.png")} />
        </a>
      </div>
    </div>

    {/* Right Column */}
    <div id="right" style={{ overflowY: "auto", height: "95vh" }}>
      <Content />
    </div>
  </div>
)

const App = () => (
    <BrowserRouter>
    <Routes>
        <Route path="notes/dropouts" element={<Dropouts />} />
        <Route path="notes/workhours" element={<WorkHours />} />
        <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
