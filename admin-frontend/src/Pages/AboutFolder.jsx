import React, { useEffect, useState } from 'react';
// import AddNote from '../components/AboutNote/AddAboutContent';
import NoteList from '../components/AboutNote/AboutContentList';
import axios from 'axios';

const AboutFolder = () => {
  const [abouttexts, setAboutTexts] = useState([]);

  const fetchAboutTexts = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/aboutcontents/aboutcontents`);
    setAboutTexts(res.data);
  };

  useEffect(() => {
    fetchAboutTexts();
  }, []);

  return (
    <div>
      {/* <AddNote refreshAboutTexts={fetchAboutTexts} /> */}
      <NoteList abouttexts={abouttexts} refreshAboutTexts={fetchAboutTexts} />
    </div>
  );
};

export default AboutFolder;
