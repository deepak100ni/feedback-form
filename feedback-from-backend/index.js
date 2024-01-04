const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;

// PUBLIC PATHS
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// DB CONNECTION
require('./config/connection');


// ROUTES
const questionRoutes = require('./routes/questionRoutes');  

app.use('/question', questionRoutes)



// ALL INVALID ROUTES
app.get('*', (req, res) => {
    res.status(404).json({
      status: 404,
      info: 'Not Found.',
      success: true,
      message: 'The resource you looking for needs an valid end point.',
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})