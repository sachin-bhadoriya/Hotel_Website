import React from 'react';
import Styles from "../Components/CSSFile/Blog.module.css";
import image1 from "../assets/Images/Outside_of_hotels/outside2.jpg";
import useServiceData from "../hooks/useServiceData"; // 👈 new hook import
import { longText } from "./JSXFile/Service";

const Blog = () => {
    const { data: servicetexts, loading, error } = useServiceData(); // 👈 fetch dynamic data

    return (
        <>
            <div className={Styles.innerServiceContainer}>
                <img src={image1} className={Styles.innerServiceImage1} alt="Header" />
                <div className={`p-2  ${Styles.maininnerServiceHeadingBox}`}>SERVICE</div>
            </div>

            <div className={`${Styles.otherHeadinginnerService} px-5`}>
                <div className="innerServiceHead">
                    <h4 className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, ex!</h4>
                </div>
                <div className={`${Styles.innerServiceContent}`}>
                    <p>{longText}</p>
                </div>
            </div>

            <div className="container-fluid my-5">
                <div className="row m-auto">
                    {servicetexts.map((servicetext, index) => (
                        <div key={index} className={`col-lg-4 text-white col-sm-6 col-12 ${Styles.offerBoxes}`}>
                            <div className={`p-3 bg-dark my-3 text-center ${Styles.offerBox}`}>
                                <h5 className="pt-3">{servicetext.heading}</h5>
                                <h5 className="pt-3">{servicetext.MainHeading}</h5>
                                <p className="hdFont">{servicetext.content}</p>

                                {servicetext.image && (
                                    <img
                                        src={`http://localhost:5000/uploads/${servicetext.image}`}
                                        alt="Service"
                                        style={{ maxWidth: '300px', height: 'auto' }}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
