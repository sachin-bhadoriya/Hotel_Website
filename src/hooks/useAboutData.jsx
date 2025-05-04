import { useEffect, useState } from 'react';
import axios from 'axios';

const useAboutData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/aboutcontents/aboutcontents'); // Update your API URL
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  return { data, loading, error };
};

export default useAboutData;
