import React from 'react';

import { Artists, Footer, Header, Possibility, Missioncards, Spaces } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => {
  return (
      <div className="App">
        <div className="gradient_bg">
          <Navbar />
          <Header />
        </div>
        {/* <Mission /> */}
        <Artists />
        <Spaces />
        {/* <Venues /> */}
        {/* <Map /> */}
        <Possibility />
        <Missioncards />
        <Footer />
      </div>
  )
}

export default App