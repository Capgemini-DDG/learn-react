import React from 'react';
import Title from './Title';

const Home = () => (
  <div className='main-container'>
    <Title titleText='Welcome to React Examples!'/>
    <p>
      Either use the examples dropdown in the header or the menu items on the left
      to navigate to an example!
    </p>
  </div>
);

export default Home;