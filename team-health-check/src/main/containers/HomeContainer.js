import React from 'react';
import {withRouter} from 'react-router-dom';
import Title from '../Title';

const HomeContainer = props => (
  <div>
    <Title titleText='Home'/>
    <p>Welcome to team health check!</p>
    <button onClick={() => props.history.push('/survey/section-one')}>Get Started!</button>
  </div>
);

export default withRouter(HomeContainer);
