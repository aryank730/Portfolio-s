// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // for MongoDB URI

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON from requests

// MongoDB connect
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/contactdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB error:', err);
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  tel: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// POST route to receive contact data
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ success: true, message: 'Contact saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to save contact' });
  }
});

// (Optional) GET all contacts for admin panel
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch contacts' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
