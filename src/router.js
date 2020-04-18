import React from 'react';
import PageIndex from './PageIndex'
import PageFeedback from './PageFeedback'
import PageHelloWord from './1PageHelloWord'
import PageJSX from './2PageJSX'
import PageRender from './3PageRender'
import PageProps from './4PageProps'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// export default () => (<Router basename="/learnReact">
export default () => (<Router>
  <Switch>
    {/* <Route exact path="/" component={PageIndex} /> */}
    <Route exact path="/" component={PageFeedback} />
    <Route exact path="/index" component={PageIndex} />
    <Route path="/hello-word" component={PageHelloWord} />
    <Route path="/jsx" component={PageJSX} />
    <Route path="/render" component={PageRender} />
    <Route path="/props" component={PageProps} />
  </Switch>
</Router>)