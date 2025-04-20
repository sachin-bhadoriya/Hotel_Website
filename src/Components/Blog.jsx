import React from 'react';
import {ServiceDataContent} from "./JSXFile/Service";
import Styles from "../Components/CSSFile/Blog.module.css";
import image1 from "../assets/Images/Outside_of_hotels/outside2.jpg";



const Blog=()=>{
    return(
        <>
            <div className={Styles.innerServiceContainer}>
                <img src={image1} className={Styles.innerServiceImage1} />
                <div className={`text-white ${Styles.maininnerServiceHeadingBox}`}>SERVICE</div>
            </div>
            <div className={`${Styles.otherHeadinginnerService} px-5`}>
                <div className="innerServiceHead">
                    <h4 className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, ex!</h4>
                </div>
                <div className="innerServiceContent">
                    <h6>Lorem, ipsum dolor.</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, delectus tempora facere fugiat porro itaque, sequi fuga soluta rem facilis fugit, officia amet nisi veniam molestias! Quod error aspernatur molestiae aliquid eligendi, voluptates blanditiis recusandae accusantium necessitatibus, ipsa eaque. Atque saepe sit fuga qui placeat ex provident similique incidunt dicta.</p>
                </div>
            </div>
            {/* <div>
                <h4 className='mx-3'>WE OFFER TO YOU !</h4>
                <div className={`container ${Styles.offerBoxes}`}>
                    <div className="row">
                        <div className={`col-sm-4 ${Styles.offerBox}`}>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className={`col-sm-4 ${Styles.offerBox}`}>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className={`col-sm-4 ${Styles.offerBox}`}>
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </div>
            </div> */}
                <div className="container-fluid my-5">
                    <div className="row m-auto">
                        <div className={`col-lg-4  text-white col-sm-6 col-12 ${Styles.offerBoxes} `}>
                            <div className={`p-3 bg-dark my-3 text-center ${Styles.offerBox}`}>
                                <h5 className="pt-3">Lorem, ipsum dolor.</h5>
                                <h2 className="hdFont">Lorem ipsum dolor sit amet.</h2>
                                <p className="py-2">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                        <div className={`col-lg-4  text-white col-sm-6 col-12 ${Styles.offerBoxes} `}>
                            <div className={`p-3 bg-dark my-3 text-center ${Styles.offerBox}`}>
                                <h5 className="pt-3">Lorem, ipsum dolor.</h5>
                                <h2 className="hdFont">Lorem ipsum dolor sit amet.</h2>
                                <p className="py-2">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                        <div className={`col-lg-4  text-white col-sm-6 col-12 ${Styles.offerBoxes} `}>
                            <div className={`p-3 bg-dark my-3 text-center ${Styles.offerBox}`}>
                                <h5 className="pt-3">Lorem, ipsum dolor.</h5>
                                <h2 className="hdFont">Lorem ipsum dolor sit amet.</h2>
                                <p className="py-2">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                        {/* <div className={`col-lg-4  text-white col-sm-6 col-12 ${Styles.offerBoxes} `}>
                            <div className={`p-3 bg-dark my-3 text-center ${Styles.offerBox}`}>
                                <h5 className="pt-3">Lorem, ipsum dolor.</h5>
                                <h2 className="hdFont">Lorem ipsum dolor sit amet.</h2>
                                <p className="py-2">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            
        </>
    )
};
export default Blog;