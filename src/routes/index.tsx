import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Squares from '../pages/Squares';
import Video from '../pages/Video';
import Friend from '../pages/Friend';
import Blog from '../pages/Blog';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Squares} />
    <Route path="/video" exact component={Video} />
    <Route path="/friend" exact component={Friend} />
    <Route path="/blog" exact component={Blog} />
  </Switch>
);

export default Routes;
