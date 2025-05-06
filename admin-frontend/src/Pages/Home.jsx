import React from 'react';
import backimage from '../assets/images/4905827.jpg';
import Styles from '../components/CSSFile/navbar.module.css';

const Home = () => {
  return (
    <div className=''>
      <img 
          src={backimage}
          alt=''
          style={{width: "100%"}}
          className={Styles.homeimage}
          
      />
    </div>
  );
};

export default Home;
