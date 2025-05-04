import React, { useState } from 'react';
import axios from 'axios';

const AddAboutText = ({ refreshAboutTexts }) => {
  const [heading, setheading] = useState('');
  const [paragraph, setParagraph] = useState('');
  
  const addAboutText = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/aboutcontents/addaboutcontents`, { heading, paragraph });
    setheading('');
    setParagraph('');
    refreshAboutTexts();
  };

  return (
    <div>
      <input value={heading} onChange={e => setheading(e.target.value)} placeholder="heading" />
      <input value={paragraph} onChange={e => setParagraph(e.target.value)} placeholder="paragraph" />
      <button onClick={addAboutText}>Add Note</button>
    </div>
  );
};

export default AddAboutText;
