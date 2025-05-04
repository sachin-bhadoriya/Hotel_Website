import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReadAboutText = () => {
  const { id } = useParams();
  const [abouttext, setAboutText] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/aboutcontents/aboutcontents/${id}`)
      .then(res => setAboutText(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div>
      <h5>heading is : {abouttext.heading}</h5>
      <p>MainHeading is : {abouttext.paragraph}</p>
    </div>
  );
};

export default ReadAboutText;
