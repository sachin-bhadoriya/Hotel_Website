import React from 'react';
import { longText, ServiceDataContent } from "./JSXFile/Service";
import Styles from "../Components/CSSFile/Blog.module.css";
import image1 from "../assets/Images/Outside_of_hotels/outside2.jpg";



const Blog = () => {
    return (
        <>
            <div className={Styles.innerServiceContainer}>
                <img src={image1} className={Styles.innerServiceImage1} />
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
                    {ServiceDataContent.map((item, index) => (
                        <div key={index} className={`col-lg-4 text-white col-sm-6 col-12 ${Styles.offerBoxes}`}>
                            <div className={`p-3 bg-dark my-3 text-center ${Styles.offerBox}`}>
                                <h5 className="pt-3">{item.heading}</h5>
                                <h2 className="hdFont">{item.subHeading}</h2>
                                <p className="py-2">{item.paragraph}</p>
                                <img
                                    src={item.image}
                                    className="img-fluid mt-3 p-2"
                                    alt="service"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
};
export default Blog;