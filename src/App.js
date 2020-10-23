import React from 'react';
import DesktopLayout from "./layouts/DesktopLayout"
import MobileLayout from "./layouts/MobileLayout"

import ReactGA from 'react-ga';

const GATAG = 'G-4X58DZ9P6E';

ReactGA.initialize(GATAG);
ReactGA.pageview(window.location.pathname + window.location.search);

const isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

const App = () => isMobile ? <MobileLayout /> : <DesktopLayout />;

export default App;
