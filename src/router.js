import React from 'react';
import PageIndex from './PageIndex'
import PageHelloWord from './1PageHelloWord'
import PageJSX from './2PageJSX'
import PageRender from './3PageRender'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default () => (<Router>
  <Switch>
    <Route exact path="/" component={PageIndex} />
    <Route path="/hello-word" component={PageHelloWord} />
    <Route path="/jsx" component={PageJSX} />
    <Route path="/render" component={PageRender} />
  </Switch>
</Router>)