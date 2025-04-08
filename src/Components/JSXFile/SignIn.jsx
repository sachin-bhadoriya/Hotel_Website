import React from 'react';
import Styles from '../CSSFile/SignIn.module.css'
const SignIn = ()=>{
    return (
        <>
           <div>
            <div>
                <label htmlFor="username" required >Username,email or phone number</label>
                <input  id ="username" type="text" />
            </div>
            <div>
                <label htmlFor="pass" required>Password</label>
                <input type="password" />
            </div>
           </div>
            
        </>
    )
};
export default SignIn;
