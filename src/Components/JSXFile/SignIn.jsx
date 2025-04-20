import React,{useState,useContext} from 'react';
import Styles from '../CSSFile/SignIn.module.css';
import {UserContext} from '../BodyFile/ClassContext';


const SignIn = ()=>{
    const [signInData,setsignInData] = useState({
        l_username :"",
        l_password: ""
    });

   const {registrations} = useContext(UserContext);

    const handleInputChange = (event)=>{
        const{name,value} = event.target;
        setsignInData({
            ...signInData ,  // copy the existing from data
            [name] : value
        });
        
    };
    const checkLogin=(event)=>{
        event.preventDefault();
        const user = registrations.find(registrations=>(
            registrations.username === signInData.l_username || registrations.password === signInData.l_password
        ));
        if (user) {
            console.log("Login successful: ", user);
        }else{
console.log("login failed: ");
        }
       
    };
    return (
        <>

           <div  className={Styles.SignIn_container}>
            <form onSubmit={checkLogin}>
                <h2 className={Styles.SignInHeader}>SIGN IN</h2>
            <div className={Styles.usernameContainer}>
                <label className={Styles.signInLabel} htmlFor="username" required >Username,email or phone number</label>
                <input className={Styles.signIn_dataInput} id ="username" type="text" onChange={handleInputChange} name="l_username"/>
            </div>
            <div className={Styles.passContainer}>
                <label className={Styles.signInLabel}htmlFor="signIn_pass" required>Password</label>
                <input className={Styles.signIn_dataInput} id ="signIn_pass" type="password" onChange={handleInputChange} name="l_password"/> { /* // login username   and login password*/}
            </div>
            <button className={Styles.signin_Button} onClick={checkLogin}>Log In</button> 
            <p className={Styles.SignUpLink}>click here to  signUp ?</p>
            </form>
           </div>
                   
        </>
    )
};
export default SignIn;
