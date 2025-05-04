import { useEffect, useState } from 'react';
import axios from 'axios';

const useServiceData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/servicecontents/servicecontents'); // Update your API URL
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, []);

  return { data, loading, error };
};

export default useServiceData;
