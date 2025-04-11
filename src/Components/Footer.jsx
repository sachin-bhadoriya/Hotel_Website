import React from 'react';
import Styles from './CSSFile/Footer.module.css';
import { FaGreaterThan  } from "react-icons/fa";
import {BrowserRouter as Router, Route,Routes,Link,Navigate} from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";


const Footer =()=>{
return(
    <div className={Styles.backGround}>
        {/* responsive footer */}
        <div className='container-fluid row justify-content-center p-4'>
            {/* add google maps */}
            <div className={`col-xxl-6 col-xl-6 col-lg-12 col-md-12 py-5 align-items-center text-center`} id='gMaps'>
                <div className={Styles.location}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229085.7886490546!2d78.02608694759688!3d26.21406191136242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1744311055163!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title='Gwalior Map'
                    ></iframe>
                </div>
            </div>

            {/* add address section */}
            <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 pt-5'>
                <h4 className={`mb-3 ${Styles.Headings}`}>GET IN TOUCH</h4>
                    <div className='d-flex'>
                        <FaLocationDot className={Styles.iconStyle} />   
                        <div className={Styles.leftItem}>
                        <h5>ADDRESS</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus.</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <TfiEmail className={Styles.iconStyle} />   
                        <div className={Styles.leftItem}>
                        <h5>EMAIL</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <IoMdCall className={Styles.iconStyle} />   
                        <div className={Styles.leftItem}>
                        <h5>PHONE NO.</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
            </div>
            {/* add quick links */}
            <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 pt-5'>
                <h4 className={Styles.Headings}>QUICK LINKS</h4>
                    {/* add icons before quick links */}
                    <ul className='list-unstyled'>
                        <li><FaGreaterThan className={Styles.linkForQuick} /> <Link className={`text-white text-decoration-none ${Styles.leftItem}`} to="/Home">Home</Link></li>
                        <li><FaGreaterThan className={Styles.linkForQuick} /> <Link className={`text-white text-decoration-none ${Styles.leftItem}`} to="/Blog">Blog</Link></li>
                        <li><FaGreaterThan className={Styles.linkForQuick} /> <Link className={`text-white text-decoration-none ${Styles.leftItem}`} to="/AboutUs">About</Link></li>
                        <li><FaGreaterThan className={Styles.linkForQuick} /> <Link className={`text-white text-decoration-none ${Styles.leftItem}`} to="/SignIn">Sign in</Link></li>
                    </ul>
            </div>
            <div className=''></div>
            
        </div>
    </div>
);
};

export default Footer ;