import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import SiteHeader from './components/SiteHeader';
import { Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/wa-trimmer" component={WApage} />
            <Route path="/ikigai" component={IKIGAIpage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
