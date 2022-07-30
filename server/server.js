const express = require('express');
require("dotenv").config();
const { default: mongoose } = require('mongoose');
const path = require('path')
const router = require('./routes.js')
const app = express();

//connection to db
mongoose.connect(process.env.URI)


app.use(express.json())

app.use('/tasks', router)

app.use(express.static(path.join(__dirname, '../' ))); //serves the index.html

app.listen(3000, () => {
    console.log(`Server listening on port: 3000`);
  });

  module.exports = app;