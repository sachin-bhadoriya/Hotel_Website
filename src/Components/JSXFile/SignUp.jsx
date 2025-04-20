import React,{useState,useContext} from 'react';
import Styles from '../CSSFile/SignUp.module.css';
import { UserContext } from '../BodyFile/ClassContext';

const SignUp =({signUpData})=>{
const {registrations,addRegistrations} = useContext(UserContext);
const [passwordError,setPasswordError] = useState('');
const [matchError,setMatchError] = useState('');
const [password, setPassword] = useState('');
const [isValid, setIsValid] = useState(false);

    const [FormData,setFormData] = useState({
        username:"",
        email:"",
        contactnumber:"",
        password:"",
        confirmpass:""
    });

    const validatePassword = (pwd)=>{
        const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{8,32}$/;
        return regex.test(pwd);

    };

    const handleInputChange =(event)=>{
        const{name, value}=event.target;
        setFormData({
            ...FormData,
            [name]:value
        });
        //validate password and confirm password
        if(name ==='password'){
            if(!validatePassword(value)){
                setPasswordError('Password must be 8-32 characters long, include uppercase,lowercase, number and special character.')
            }else{
                setPasswordError('');
            }
        }
        if(name ==='confirmpass'){
            if(value !== FormData.password){
                setMatchError('Password do not match');
            }else{
                console.log(`${FormData.password}`);
                setMatchError('');
            }
        }
    };

    const getUserDetails = (event)=>{
        event.preventDefault();
       //check if there are any errors before proceeding
       if(passwordError || matchError){
        return; //  prevent form submission if there are error
       }
       //call the signUpData and addRegistration function
        signUpData(FormData);
        addRegistrations(FormData);
    }
       
    return (
        <>
            
        <div className={Styles.signup_container}>
            <form  id="SignUpForm"className={Styles.signup_form} onSubmit={getUserDetails}>
            <div className={Styles.name_container}>
                <label className={Styles.label_container} htmlFor="fullname" required >FULL NAME: </label>
                <input className={Styles.input_container} type="text" name="username" onChange={handleInputChange} required/>
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
                <label className={Styles.password_Error} htmlFor="pass">{passwordError}</label>
            </div>
            <div>
                <label className={Styles.label_container} htmlFor="confirmpass">CONFIRM PASSWORD : </label>
                <input className={Styles.input_container} id="confirmpass" type="password" name="confirmpass" onChange={handleInputChange} required/>
                <label className={Styles.match_Error} htmlFor="pass">{matchError}</label>
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