
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.db_Url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((data) => {
    console.log(`Connected to database${data.connection.host}`);
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });

app.get('/', (req, res) => {
  res.send('Customer Management System Backend');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
