import React from 'react';
import  { IntroductionDataDetails } from "../Components/Introduction";


const AboutUs = () =>{
    return (
        <>
            <div className="container my-5 p-3 border shadow rounded">
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
            </div>
        </>
    );
}
export default AboutUs;