import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <Link to="/service">Service</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
