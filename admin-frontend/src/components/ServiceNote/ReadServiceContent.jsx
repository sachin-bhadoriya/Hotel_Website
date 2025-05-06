import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReadServiceText = () => {
  const { id } = useParams();
  const [servicetext, setServiceText] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/servicecontents/servicecontents/${id}`)
      .then(res => setServiceText(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div>
      <h5>heading is : {servicetext.heading}</h5>
      <h2>MainHeading is : {servicetext.MainHeading}</h2>
      <p>{servicetext.content}</p>
      {servicetext.image && (
        <img
          src={`${process.env.REACT_APP_API_URL}/uploads/${servicetext.image}`}
          alt="Service"
          style={{ maxWidth: '300px', height: 'auto' }}
        />
      )}
    </div>
  );
};

export default ReadServiceText;
