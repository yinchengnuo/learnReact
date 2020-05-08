import React from 'react';
import PageIndex from './PageIndex'
import PageFeedback from './PageFeedback'
import PageHelloWord from './1PageHelloWord'
import PageJSX from './2PageJSX'
import PageRender from './3PageRender'
import PageProps from './4PageProps'
import PageState from './5PageState'
import PageEvent from './6PageEvent'
import PageIf from './7PageIf'
import PageFor from './8PageFor'
import PageForm from './9PageForm'
import PageStore from './10PageStore'
import PageRedux from './PageRedux'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// export default () => (<Router basename="/learnReact">
export default () => (<Router>
  <Switch>
    <Route exact path="/" component={PageFeedback} />
    {/* <Route exact path="/" component={PageIndex} /> */}
    <Route exact path="/index" component={PageIndex} />
    <Route path="/hello-word" component={PageHelloWord} />
    <Route path="/jsx" component={PageJSX} />
    <Route path="/render" component={PageRender} />
    <Route path="/props" component={PageProps} />
    <Route path="/state" component={PageState} />
    <Route path="/event" component={PageEvent} />
    <Route path="/if" component={PageIf} />
    <Route path="/for" component={PageFor} />
    <Route path="/form" component={PageForm} />
    <Route path="/store" component={PageStore} />
    <Route path="/redux" component={PageRedux} />
  </Switch>
</Router>)