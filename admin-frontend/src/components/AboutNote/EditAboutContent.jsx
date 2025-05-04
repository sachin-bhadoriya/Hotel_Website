import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditAboutText = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [abouttext, setAboutText] = useState({ heading: "", paragraph: "" });
  
  const handleUpdate = async () => {
    await axios.put(`${process.env.REACT_APP_API_URL}/api/aboutcontents/updateaboutcontents/${id}`, abouttext);
    navigate('/about');
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/aboutcontents/aboutcontents/${id}`).then(res => {
      setAboutText({ heading: res.data.heading, paragraph: res.data.paragraph });
    });
  }, [id]);


  return (
    <div>
      <input value={abouttext.heading} onChange={e => setAboutText({ ...abouttext, heading: e.target.value })} />
      <textarea value={abouttext.paragraph} onChange={e => setAboutText({ ...abouttext, paragraph: e.target.value })} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditAboutText;
