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
                        <div key={index} className={`text-white col-sm-12 col-12 ${Styles.offerBoxes} `}>
                                <div className={`p-2 bg-dark my-3 text-center row ${Styles.offerBox}`}>
                                    <div className="col-md-6">
                                        <h5 className="pt-3 my-5 fs-1">{servicetext.heading}</h5>
                                        <h5 className="pt-3">{servicetext.MainHeading}</h5>
                                        <p className="hdFont">{servicetext.content}</p>
                                    </div>
                                    <div className="col-md-6 my-3">
                                        {servicetext.image && (
                                            <img
                                            src={`http://localhost:5000/uploads/${servicetext.image}`}
                                            className="img-fluid mt-3 p-2"
                                            width={400}
                                            height={400}
                                            alt="service"
                                        />
                                        )}
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
