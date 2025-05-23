
// this is a header
import {useState} from 'react';
import {Form, Link} from 'react-router-dom';
import Styles from  '../CSSFile/Header.module.css';
import Logo_Component from '../JSXFile/Logo';
import LogoImage from '../../assets/images/logo.png';
import { CiMenuBurger } from "react-icons/ci";

const Header=({onSignUp})=>{
    // define the object behaviour
    const [signUpData,setsignUpData] = useState({
        username:"",
        email:"",
        contactnumber:""
    });
    
// get the sign up value through prop
   const getSignUpValue =()=>{
    console.log("get username value");
    setsignUpData(onSignUp);
    Object.entries(signUpData).forEach(([key, value])=>{
        console.log(`${key}:${value}`);
    });
   }

    return (
        <>           
            <header className={`navbarFont  ${Styles.container}`}>
                <div className={` `}>
                    <nav>
                        <ul className={` ${Styles.navbarFont} ${Styles.containerLink}`}>
                            {/* //pass logoImage through  props*/}
                            <span className={Styles.logoimagecss}><Logo_Component Image={LogoImage} /></span>
                            <li>
                                <Link to="/Home"><span className={`${Styles.laptopView} ${Styles.home_css}`}>Home</span></Link>
                            </li><li>
                                <Link to="/Blog"><span className={`${Styles.laptopView} ${Styles.blog_css}`}>Blog</span></Link>
                            </li><li>
                                <Link to="/Pages"><span className={`${Styles.laptopView} ${Styles.pages_css}`}>Pages</span></Link>
                            </li><li>
                                <Link to="/Rooms"><span className={`${Styles.laptopView} ${Styles.rooms_css}`}>Rooms</span></Link>
                            </li><li>
                                <Link to="/AboutUs"><span className={`${Styles.laptopView} ${Styles.aboutus_css}`}>About Us</span></Link>
                            </li><li>
                                <Link to="/ContactUs"><span className={`${Styles.laptopView} ${Styles.contactus_css}`}>Contact Us</span></Link>
                            </li><li>
                                <Link to="/SignUp"><span className={`${Styles.laptopView} ${Styles.SignUp_css}`} onClick={getSignUpValue}>Sign Up</span></Link>
                            </li>
                            <li>
                                <Link to="/SignIn" className={`${Styles.laptopView} ${Styles.SignIn_css}`} ><span>Sign In</span></Link>
                            </li>
                            <li><span><CiMenuBurger className={`${Styles.mobileView} ${Styles.menuBar}`} /></span></li>
                            {/* You can add more links here for other routes if needed */}
                        </ul>
                    </nav>
                </div>
            </header>
       
        </>
    );
}

export default Header;
