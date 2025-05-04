import React, { useEffect, useState } from 'react';
import AddNote from '../components/ServiceNote/AddServiceContent';
import NoteList from '../components/ServiceNote/ServiceContentList';
import axios from 'axios';

const Home = () => {
  const [servicetexts, setServiceTexts] = useState([]);

  const fetchServiceTexts = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/servicecontents/servicecontents`);
    setServiceTexts(res.data);
  };

  useEffect(() => {
    fetchServiceTexts();
  }, []);

  return (
    <div>
      <AddNote refreshServiceTexts={fetchServiceTexts} />
      <NoteList servicetexts={servicetexts} refreshServiceTexts={fetchServiceTexts} />
    </div>
  );
};

export default Home;
