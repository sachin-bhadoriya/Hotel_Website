import React from 'react';
import Styles from './CSSFile/Footer.module.css';
import { FaGreaterThan  } from "react-icons/fa";
import {BrowserRouter as Router, Route,Routes,Link,Navigate} from 'react-router-dom';

const Footer =()=>{
return(
    <div className={Styles.backGround}>
        {/* responsive footer */}
        <div className='container-fluid justify-content-center row p-4'>
            {/* add google maps */}
            <div className=' col-12 col-md-10 col-lg-5 py-5' id='gMaps'>
                <iframe className={Styles.location} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229085.7886490546!2d78.02608694759688!3d26.21406191136242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1744311055163!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title='Gwalior Map'
                    width={550}
                    height={400}
                ></iframe>
            </div>
            {/* add address section */}
            <div className='col-md-6 col-lg-3 py-5'>
                <h4 className={Styles.Headings}>GET IN TOUCH</h4>
                    <h5>ADDRESS</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, earum.</p>
                    <h5>EMAIL</h5>
                    <p>Lorem@ipsum.gmail.com</p>
                    <h5>PHONE NO.</h5>
                    <p>+91 98765 43210</p>
            </div>
            {/* add quick links */}
            <div className='col-md-6 col-lg-3 py-5'>
                <h4 className={Styles.Headings}>QUICK LINKS</h4>
                {/* add icons before quick links */}
                <h6><FaGreaterThan />&nbsp; <Link className='text-white text-decoration-none' to="/Home">Home</Link></h6>
                <h6><FaGreaterThan />&nbsp; <Link className='text-white text-decoration-none' to="/Blog">Blog</Link></h6>
                <h6><FaGreaterThan />&nbsp; <Link className='text-white text-decoration-none' to="/AboutUs">About</Link></h6>
                <h6><FaGreaterThan />&nbsp; <Link className='text-white text-decoration-none' to="/SignIn">Sign in</Link></h6>
            </div>
            
        </div>
    </div>
);
};

export default Footer ;