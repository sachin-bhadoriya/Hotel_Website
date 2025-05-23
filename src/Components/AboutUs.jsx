import React from 'react';
import Styles from "./CSSFile/About.module.css";
import image1 from "../assets/Images/Outside_of_hotels/outside1.jpg";
import useAboutData from '../hooks/useAboutData';


const AboutUs = () => {
    const { data: abouttexts, loading, error } = useAboutData(); // 👈 fetch dynamic data
    return (
        <>

            <div className={Styles.aboutUsContainer}>
                <img src={image1} className={Styles.AboutImage1} />
                <div className={`p-2 ${Styles.mainAboutHeadingBox}`}>ABOUT US</div>
            </div>
            <div className={`${Styles.otherHeadingAboutUs} px-5`}>
                <div className="AboutHead">
                    <h4 className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, ex!</h4>
                </div>

                {abouttexts.map((abouttext) => (
                    <div key={abouttext._id} >
                        <h6>{abouttext.heading}</h6>
                        <p>{abouttext.paragraph}</p>
                    </div>
                ))}
            </div>
            <div className={Styles.missionVissionContainer}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-7">
                            <img src={image1} alt="" className='' />
                        </div>
                        <div className={`col-sm-5 my-4  ${Styles.infoBoxMain}`}>
                            <div className={` ${Styles.infoBox}`}>
                                <h1>OUR MISSION</h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quis vero vel. Minus impedit quaerat assumenda recusandae iusto. Quod molestias, est officiis saepe reprehenderit alias.
                                </p>
                            </div>
                            <br />
                            <div className={`${Styles.infoBox} ${Styles.infoBoxsecond}`}>
                                <h1>OUR VISION</h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quis vero vel. Minus impedit quaerat assumenda recusandae iusto. Quod molestias, est officiis saepe reprehenderit alias.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUs;