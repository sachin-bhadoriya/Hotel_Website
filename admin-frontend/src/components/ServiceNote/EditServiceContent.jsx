import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditServiceText = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [servicetext, setServiceText] = useState({ heading: "", content: "", MainHeading: "" });
  
  const handleUpdate = async () => {
    await axios.put(`${process.env.REACT_APP_API_URL}/api/servicecontents/updateservicecontents/${id}`, servicetext);
    navigate('/service');
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/servicecontents/servicecontents/${id}`).then(res => {
      setServiceText({ heading: res.data.heading, MainHeading: res.data.MainHeading, content: res.data.content });
    });
  }, [id]);


  return (
    <div>
      <input value={servicetext.heading} onChange={e => setServiceText({ ...servicetext, heading: e.target.value })} />
      <input value={servicetext.MainHeading} onChange={e => setServiceText({ ...servicetext, MainHeading: e.target.value })} />
      <textarea value={servicetext.content} onChange={e => setServiceText({ ...servicetext, content: e.target.value })} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditServiceText;
