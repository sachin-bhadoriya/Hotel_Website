import React from 'react';
import adminimage from '../assets/images/4905827.jpg';
import Styles from '../components/CSSFile/navbar.module.css';

const Home = () => {
  return (
    <div className=''>
      <img 
          src={adminimage}
          style={{width: "100%"}}
          className={Styles.homeimage}
          
      />
    </div>
  );
};

export default Home;
