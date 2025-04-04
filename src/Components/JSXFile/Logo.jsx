import React from 'react';
//import Prop_Types from 'prop-types';
import Styles from '../CSSFile/Logo.module.css';

const Logo =({Image})=>{
    return (
        <>
        <div>
            <img src={Image} alt="Hotel Logo" />
        </div>
     
            
        
        </>
    );

}
export default Logo;