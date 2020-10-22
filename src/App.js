import React from 'react';
import logo from './logo.svg';
import DesktopLayout from "./layouts/DesktopLayout"
import MobileLayout from "./layouts/MobileLayout"

const isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

const App = () => isMobile ? <MobileLayout /> : <DesktopLayout />;

export default App;
