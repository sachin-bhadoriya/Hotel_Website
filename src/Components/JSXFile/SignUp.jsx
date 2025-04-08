import React from 'react';
import Styles from '../CSSFile/SignUp.module.css';

const SignUp =()=>{
    return (
        <>
            
        <div className={Styles.signup_container}>
            <form className={Styles.signup_form}>
            <div className={Styles.name_container}>
                <label className={Styles.label_container} htmlFor="fullname" required >FULL NAME: </label>
                <input className={Styles.input_container} type="text" />
            </div>
            <div>
                <label className={Styles.label_container}htmlFor="contactnumber"> CONTACT NUMBER:</label>
                <input className={Styles.input_container} id="contactnumber" type="tel" minLength="10" maxLength="10" required/>
            </div>
            <div>
                <label className={Styles.label_container}htmlFor="emailno">EMAIL ID:</label>
                <input className={Styles.input_container} id ="emailno" type="email"  required/>
            </div>
            <div>
                <label className={Styles.label_container} htmlFor="pass">PASSWORD</label>
                <input className={Styles.input_container} id = "pass"type="password" required/>
            </div>
            <div>
                <label className={Styles.label_container} htmlFor="confirmpass">CONFIRM PASSWORD : </label>
                <input className={Styles.input_container} id="confirmpass" type="password"  required/>
            </div>
            <div>
                <button className={Styles.button_css}>Register</button>
            </div>
            </form>
        </div>
        </>
    )
};
export default SignUp;