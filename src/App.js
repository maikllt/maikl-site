import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import SiteHeader from './components/SiteHeader';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import WApage from './content/WApage';
import IKIGAIpage from './content/IKIGAIpage';

class App extends Component {
  render() {
    return (
      <>
          <Theme theme="g100">
            <SiteHeader />
          </Theme>
          <Content>
            <Routes>
              <Route exact path="/" element={< LandingPage />} />
              <Route path="/wa-trimmer" element={< WApage />} />
              <Route path="/wa" element={< WApage />} />
              <Route path="/ikigai" element={< IKIGAIpage />} />
            </Routes>
          </Content>
      </>
    );
  }
}

export default App;
