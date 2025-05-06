import React, { useEffect, useState } from "react";
import Styles from "../CSSFile/Service.module.css";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import useServiceData from "../../hooks/useServiceData";


// create data through props

// export const ServiceDataContent = [
//   {
//     image: "https://picsum.photos/id/239/400/400",
//     heading: "sachin singh",
//     subHeading: "Another Header",
//     paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim accusamus id nesciunt quidem adipisci."
//   },
//   {
//     image: "https://picsum.photos/id/234/400/400",
//     heading: "TwoHeader",
//     subHeading: "Another Header",
//     paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim accusamus id nesciunt quidem adipisci."
//   },
//   {
//     image: "https://picsum.photos/id/249/400/400",
//     heading: "ThreeHeader",
//     subHeading: "Another Header",
//     paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim accusamus id nesciunt quidem adipisci."
//   },
//   {
//     image: "https://picsum.photos/id/269/400/400",
//     heading: "FourHeader",
//     subHeading: "Another Header",
//     paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim accusamus id nesciunt quidem adipisci."
//   }
// ];
export const longText =
  "sachin singh ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum ullam perferendis hic assumenda perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolor quisquam harum ipsa hic consequuntur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum labore odit debitis. Officia, voluptas!";

export const tablefrommongodb = {

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
  const { data: servicetexts, loading, error } = useServiceData(); // 👈 fetch dynamic data
  return (
    <>
      <div className={`container-fluid ${Styles.serviceHeading}`}>
        <h5>WHAT WE DO</h5>
        <h2>Service We Provide</h2>
        <ReadMoreText text={longText} className="serviceText p-3 m-auto" />
      </div>
      <div className="container-fluid my-5">
        <div className="row m-auto">
          {servicetexts.map((servicetext)       => (
            <div key={servicetext._id} className={`col-lg-3 col-sm-6 col-12 ${Styles.cardBody}`}>
              <div className={`p-3 my-3 text-center ${Styles.cards}`}>
                <h5 className="pt-3">{servicetext.heading}</h5>
                <h3 className="pt-3">{servicetext.MainHeading}</h3>
                <p className="hdFont">{servicetext.content}</p>
                <p className="py-2">
                  {/* <ReadMoreText text={item.paragraph} /> */}
                </p>
                <Link to="/blog">Click Here</Link>
                <img
                  src={`http://localhost:5000/uploads/${servicetext.image}`}
                  className="img-fluid mt-3 p-2"
                  width={400}
                  height={400}
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
