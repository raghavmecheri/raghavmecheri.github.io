import React from 'react';
import logo from './logo.svg';
import './App.css';
import MobileComponent from "./components/MobileComponent"
import DesktopComponent from "./components/DesktopComponent"

const isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

const App = () => isMobile ? <MobileComponent /> : <DesktopComponent />;

export default App;
