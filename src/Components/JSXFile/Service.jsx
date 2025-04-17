import React, { useState } from "react";
import Styles from "../CSSFile/Service.module.css";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';


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
  const longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum ullam perferendis hic assumenda perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolor quisquam harum ipsa hic consequuntur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum labore odit debitis. Officia, voluptas!";

  return (
    <>
      <div className={`container-fluid ${Styles.serviceHeading}`}>
        <h5>WHAT WE DO</h5>
        <h2>Service We Provide</h2>

        <ReadMoreText text={longText} className="serviceText w-50 m-auto" />
      </div>

      <div className="container-fluid my-5">
        <div className="row m-auto">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className={`col-lg-3 col-sm-6 col-12 ${Styles.cardBody}`}>
              <div className={`p-3 my-3 text-center ${Styles.cards}`}>
                <h5 className="pt-3">Header</h5>
                <h2 className="hdFont">Another Header</h2>
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim accusamus id nesciunt quidem adipisci.
                </p>
                <Link>Click Here</Link>
                <img
                  src="https://picsum.photos/id/239/600/300"
                  className="img-fluid mt-3 p-2 w-100"
                  alt="service"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
