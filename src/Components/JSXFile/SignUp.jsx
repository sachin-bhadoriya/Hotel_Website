import React,{useState} from 'react';
import Styles from '../CSSFile/SignUp.module.css';

const SignUp =({signUpData})=>{
    const [FormData,setFormData] = useState({
        username:"",
        email:"",
        contactnumber:"",
        password:"",
        confirmpass:""
    });

    const handleInputChange =(event)=>{
        const{name, value}=event.target;
        setFormData({
            ...FormData,
            [name]:value
        })
    
    };
    const getUserDetails = (event)=>{
        event.preventDefault();
        console.log(`username ${FormData.username}`)
        console.log(`email ${FormData.email}`);
        signUpData(FormData);
       
    }
    return (
        <>
            
        <div className={Styles.signup_container}>
            <form  id="SignUpForm"className={Styles.signup_form} onSubmit={getUserDetails}>
            <div className={Styles.name_container}>
                <label className={Styles.label_container} htmlFor="fullname" required >FULL NAME: </label>
                <input className={Styles.input_container} type="text" name="username" onChange={handleInputChange}/>
            </div>
            <div>
                <label className={Styles.label_container}htmlFor="contactnumber"> CONTACT NUMBER:</label>
                <input className={Styles.input_container} id="contactnumber" type="tel" minLength="10" maxLength="10" name="contactnumber" onChange={handleInputChange} required/>
            </div>
            <div>
                <label className={Styles.label_container}htmlFor="emailno">EMAIL ID:</label>
                <input className={Styles.input_container} id ="emailno" type="email" name="email" onChange={handleInputChange} required/>
            </div>
            <div>
                <label className={Styles.label_container} htmlFor="pass">PASSWORD</label>
                <input className={Styles.input_container} id = "pass"type="password" name="password" onChange={handleInputChange} required/>
            </div>
            <div>
                <label className={Styles.label_container} htmlFor="confirmpass">CONFIRM PASSWORD : </label>
                <input className={Styles.input_container} id="confirmpass" type="password" name="confirmpass" onChange={handleInputChange} required/>
            </div>
            <div>
                <button 
                type="submit"
                className={Styles.button_css}
                >Register</button>
            </div>
            </form>
        </div>
        </>
    )
};
export default SignUp;