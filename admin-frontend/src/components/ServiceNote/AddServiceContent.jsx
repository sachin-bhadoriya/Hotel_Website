import React, { useState } from 'react';
import axios from 'axios';

const AddServiceText = ({ refreshServiceTexts }) => {
  const [heading, setheading] = useState('');
  const [content, setContent] = useState('');
  const [MainHeading, setMainHeading] = useState('');
  const [image, setImage] = useState(null);

  const addServiceText = async () => {
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("MainHeading", MainHeading);
    formData.append("content", content);
    if (image) formData.append("image", image);

    await axios.post(`${process.env.REACT_APP_API_URL}/api/servicecontents/addservicecontents`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    setheading('');
    setContent('');
    setMainHeading('');
    setImage(null);
    refreshServiceTexts();
  };

  return (
    <div>
      <input value={heading} onChange={e => setheading(e.target.value)} placeholder="heading" />
      <input value={MainHeading} onChange={e => setMainHeading(e.target.value)} placeholder="MainHeading" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button onClick={addServiceText}>Add Note</button>
    </div>
  );
};

export default AddServiceText;
