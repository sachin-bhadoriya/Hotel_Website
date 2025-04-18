import React, { useState } from "react";
import Styles from "../CSSFile/Service.module.css";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';


// create data through props

export const ServiceDataContent = {
  longText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum ullam perferendis hic assumenda perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolor quisquam harum ipsa hic consequuntur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum labore odit debitis. Officia, voluptas!",
  ImageServiceOne : "https://picsum.photos/id/239/600/300",
  headingServiceOne : "OneHeader",
  AnotherHeadingServiceOne : "Another Header",
  ParaServiceOne : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim accusamus id nesciunt quidem adipisci.",
  ImageServiceTwo : "https://picsum.photos/id/234/600/300",
  headingServiceTwo : "TwoHeader",
  AnotherHeadingServiceTwo : "Another Header",
  ParaServiceTwo : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim accusamus id nesciunt quidem adipisci.",
  ImageServiceThree : "https://picsum.photos/id/249/600/300",
  headingServiceThree : "ThreeHeader",
  AnotherHeadingServiceThree : "Another Header",
  ParaServiceThree : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim accusamus id nesciunt quidem adipisci.",
  ImageServiceFour : "https://picsum.photos/id/269/600/300",
  headingServiceFour : "FourHeader",
  AnotherHeadingServiceFour : "Another Header",
  ParaServiceFour : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim accusamus id nesciunt quidem adipisci.",



}


const ReadMoreText = ({ text, wordLimit = 15, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");
  const isLong = words.length > wordLimit;

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const displayText = isExpanded || !isLong
    ? text
    : words.slice(0, wordLimit).join(" ") + "...";

  return (
    <p className={className}>
      {displayText}
      {isLong && (
        <span
          onClick={toggleReadMore}
          style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
        >
          {isExpanded ? " Read Less" : " Read More"}
        </span>
      )}
    </p>
  );
};

const Service = () => {
  

  return (
    <>
      <div className={`container-fluid ${Styles.serviceHeading}`}>
        <h5>WHAT WE DO</h5>
        <h2>Service We Provide</h2>

        <ReadMoreText text={ServiceDataContent.longText} className="serviceText w-50 m-auto" />
      </div>

      <div className="container-fluid my-5">
        <div className="row m-auto">
          <div className={`col-lg-3 col-sm-6 col-12 ${Styles.cardBody}`}>
            <div className={`p-3 my-3 text-center ${Styles.cards}`}>
              <h5 className="pt-3">{ServiceDataContent.headingServiceOne}</h5>
              <h2 className="hdFont">{ServiceDataContent.AnotherHeadingServiceOne}</h2>
              <p className="py-2">
                {ServiceDataContent.ParaServiceOne}
              </p>
              <Link>Click Here</Link>
              <img
                src={ServiceDataContent.ImageServiceOne}
                className="img-fluid mt-3 p-2 w-100"
                alt="service"
              />
            </div>
          </div>
          <div className={`col-lg-3 col-sm-6 col-12 ${Styles.cardBody}`}>
            <div className={`p-3 my-3 text-center ${Styles.cards}`}>
              <h5 className="pt-3">{ServiceDataContent.headingServiceTwo}</h5>
              <h2 className="hdFont">{ServiceDataContent.AnotherHeadingServiceTwo}</h2>
              <p className="py-2">
                {ServiceDataContent.ParaServiceTwo}
              </p>
              <Link>Click Here</Link>
              <img
                src={ServiceDataContent.ImageServiceTwo}
                className="img-fluid mt-3 p-2 w-100"
                alt="service"
              />
            </div>
          </div>
          <div className={`col-lg-3 col-sm-6 col-12 ${Styles.cardBody}`}>
            <div className={`p-3 my-3 text-center ${Styles.cards}`}>
              <h5 className="pt-3">{ServiceDataContent.headingServiceThree}</h5>
              <h2 className="hdFont">{ServiceDataContent.AnotherHeadingServiceThree}</h2>
              <p className="py-2">
                {ServiceDataContent.ParaServiceThree}
              </p>
              <Link>Click Here</Link>
              <img
                src={ServiceDataContent.ImageServiceThree}
                className="img-fluid mt-3 p-2 w-100"
                alt="service"
              />
            </div>
          </div>
          <div className={`col-lg-3 col-sm-6 col-12 ${Styles.cardBody}`}>
            <div className={`p-3 my-3 text-center ${Styles.cards}`}>
              <h5 className="pt-3">{ServiceDataContent.headingServiceFour}</h5>
              <h2 className="hdFont">{ServiceDataContent.AnotherHeadingServiceFour}</h2>
              <p className="py-2">
                {ServiceDataContent.ParaServiceFour}
              </p>
              <Link>Click Here</Link>
              <img
                src={ServiceDataContent.ImageServiceFour}
                className="img-fluid mt-3 p-2 w-100"
                alt="service"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
