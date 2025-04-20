import React from 'react';
import  { IntroductionDataDetails } from "./JSXFile/Introduction";
import Styles from "./CSSFile/About.module.css";
import image1 from "../assets/Images/Outside_of_hotels/outside1.jpg";


const AboutUs = () =>{
    return (
        <>
            {/* <div className="container my-5 p-3 border shadow rounded">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h5>ABOUTUS</h5>
                        <h2>{IntroductionDataDetails.heading}</h2>
                        <p>dajskjfdasdfohj{IntroductionDataDetails.mainHeading}</p>
                    </div>
                    <div className="col-md-6">
                        <img src={IntroductionDataDetails.imageIntro} alt="content" className="img-fluid rounded" />
                    </div>
                </div>
            </div> */}



            <div className={Styles.aboutUsContainer}>
                <img src={image1} className={Styles.AboutImage1} />
                <div className={`text-white ${Styles.mainAboutHeadingBox}`}>ABOUT US</div>
            </div>
            <div className={`${Styles.otherHeadingAboutUs} px-5`}>
                <div className="AboutHead">
                    <h4 className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, ex!</h4>
                </div>
                <div className="AboutContent">
                    <h6>Lorem, ipsum dolor.</h6>
                    <p>dajskjfdasdfohj{IntroductionDataDetails.mainHeading}</p>
                </div>
            </div>
            <div className={Styles.missionVissionContainer}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-7">
                            <img src={image1} alt="" className='' />
                        </div>
                        <div className="col-sm-5">
                            <h1>OUR MISSION</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quis vero vel. Minus impedit quaerat assumenda recusandae iusto. Quod molestias, est officiis saepe reprehenderit alias.
                            </p>
                            <h1>OUR VISSION</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quis vero vel. Minus impedit quaerat assumenda recusandae iusto. Quod molestias, est officiis saepe reprehenderit alias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUs;