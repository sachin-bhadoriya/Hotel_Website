const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// config .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err.message));

// Service Routes
const ServiceTextRoutes = require("./routes/ServiceTextRoutes");
app.use("/api/servicecontents", ServiceTextRoutes);
app.use('/uploads', express.static('uploads'));


// About Routes
const AboutTextRoutes = require("./routes/AboutTextRoutes");
app.use("/api/aboutcontents", AboutTextRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
