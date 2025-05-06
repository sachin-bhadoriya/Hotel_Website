import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditServiceText = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [servicetext, setServiceText] = useState({
    heading: "",
    content: "",
    MainHeading: "",
    image: "", // old image URL
  });
  const [newImage, setNewImage] = useState(null); // for updated image

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/servicecontents/servicecontents/${id}`)
      .then((res) => {
        setServiceText(res.data);
      });
  }, [id]);

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("heading", servicetext.heading);
    formData.append("MainHeading", servicetext.MainHeading);
    formData.append("content", servicetext.content);
    if (newImage) {
      formData.append("image", newImage);
    }

    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/servicecontents/updateservicecontents/${id}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    navigate("/service");
  };

  return (
    <div>
      <input
        value={servicetext.heading}
        onChange={(e) => setServiceText({ ...servicetext, heading: e.target.value })}
        placeholder="Heading"
      />
      <input
        value={servicetext.MainHeading}
        onChange={(e) => setServiceText({ ...servicetext, MainHeading: e.target.value })}
        placeholder="Main Heading"
      />
      <textarea
        value={servicetext.content}
        onChange={(e) => setServiceText({ ...servicetext, content: e.target.value })}
        placeholder="Content"
      />
      <input
        type="file"
        onChange={(e) => setNewImage(e.target.files[0])}
      />
      
      {servicetext.image && (
        <div>
          <p>Old Image:</p>
          <img
            src={`${process.env.REACT_APP_API_URL}/uploads/${servicetext.image}`}
            alt="Current"
            width="200"
          />
        </div>
      )}

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditServiceText;
