import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ServiceTextView = () => {
  const [servicetexts, setServiceTexts] = useState([]);

  const fetchServiceTexts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/servicecontents/servicecontents`);
      setServiceTexts(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/servicecontents/deleteservicecontents/${id}`);
      fetchServiceTexts();
    } catch (err) {
      console.error("Error deleting note:", err.message);
    }
  };

  useEffect(() => {
    fetchServiceTexts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Notes</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>heading</th>
            <th>MainHeading</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {servicetexts.map(servicetext => (
            <tr key={servicetext._id}>
              <td>{servicetext.heading}</td>
              <td>{servicetext.MainHeading}</td>
              <td>{servicetext.content}</td>
              <td>
                <Link to={`/edit/${servicetext._id}`}>Edit</Link> |{" "}
                <Link to={`/servicecontent/${servicetext._id}`}>Read</Link> |{" "}
                <button onClick={() => handleDelete(servicetext._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTextView;
