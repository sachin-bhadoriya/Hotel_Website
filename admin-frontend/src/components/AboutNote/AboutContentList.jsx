import React from 'react';
import { Link } from 'react-router-dom';

const AboutTextList = ({ abouttexts, refreshAboutTexts }) => {
  // const handleDelete = async (id) => {
  //   await axios.delete(`${process.env.REACT_APP_API_URL}/api/aboutcontents/deleteaboutcontents/${id}`);
    refreshAboutTexts();
  // };

  return (
    <div>
      {abouttexts.map(abouttext => (
        <div key={abouttext._id}>
          <h2>{abouttext.heading}</h2>
          <p>{abouttext.paragraph}</p>
          <Link to={`/editaboutcontents/${abouttext._id}`}>Edit</Link> | <Link to={`/aboutcontents/${abouttext._id}`}>Read</Link> | 
          {/* <button onClick={() => handleDelete(abouttext._id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default AboutTextList;
