import React, { useState } from 'react';
import axios from 'axios';

const AddServiceText = ({ refreshServiceTexts }) => {
  const [heading, setheading] = useState('');
  const [content, setContent] = useState('');
  const [MainHeading, setMainHeading] = useState('');
  
  const addServiceText = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/servicecontents/addservicecontents`, { heading, content, MainHeading });
    setheading('');
    setContent('');
    setMainHeading('');
    refreshServiceTexts();
  };

  return (
    <div>
      <input value={heading} onChange={e => setheading(e.target.value)} placeholder="heading" />
      <input value={MainHeading} onChange={e => setMainHeading(e.target.value)} placeholder="MainHeading" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      <button onClick={addServiceText}>Add Note</button>
    </div>
  );
};

export default AddServiceText;
