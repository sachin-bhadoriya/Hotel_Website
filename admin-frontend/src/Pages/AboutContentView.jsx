import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AboutTextView = () => {
  const [abouttexts, setAboutTexts] = useState([]);

  const fetchAboutTexts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/aboutcontents/aboutcontents`);
      setAboutTexts(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/aboutcontents/deleteaboutcontents/${id}`);
      fetchAboutTexts();
    } catch (err) {
      console.error("Error deleting note:", err.message);
    }
  };

  useEffect(() => {
    fetchAboutTexts();
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
          {abouttexts.map(abouttext => (
            <tr key={abouttext._id}>
              <td>{abouttext.heading}</td>
              <td>{abouttext.MainHeading}</td>
              <td>{abouttext.content}</td>
              <td>
                <Link to={`/edit/${abouttext._id}`}>Edit</Link> |{" "}
                <Link to={`/aboutcontent/${abouttext._id}`}>Read</Link> |{" "}
                <button onClick={() => handleDelete(abouttext._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AboutTextView;
