const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// connect mongoose 
mongoose.connect('mongodb://localhost:27017/undangan_pengajian')
  .then((result) => app.listen(3002))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());

// route
app.use(userRoutes);
app.get('/', (req, res) => {
  res.send('hello');
});