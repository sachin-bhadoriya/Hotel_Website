import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ServiceTextList = ({ servicetexts, refreshServiceTexts }) => {
  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/servicecontents/deleteservicecontents/${id}`);
    refreshServiceTexts();
  };

  return (
    <div>
      {servicetexts.map(servicetext => (
        <div key={servicetext._id}>
          <h2>{servicetext.heading}</h2>
          <h3>{servicetext.MainHeading}</h3>
          <p>{servicetext.content}</p>
          {servicetext.image && (
            <img
              src={`${process.env.REACT_APP_API_URL}/uploads/${servicetext.image}`}
              alt="service"
              width="150"
              style={{ marginBottom: "10px" }}
            />
          )}
          <Link to={`/editservicecontents/${servicetext._id}`}>Edit</Link> |
          <Link to={`/servicecontents/${servicetext._id}`}>Read</Link> |
          <button onClick={() => handleDelete(servicetext._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ServiceTextList;
