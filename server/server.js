const express = require('express');
const { default: mongoose } = require('mongoose');
const path = require('path')
const router = require('./routes.js')
const app = express();

//connection to db
mongoose.connect('mongodb+srv://aku15atlas:NfFF5H6J7m9C71kj@soloprojectcluster.pnvqxti.mongodb.net/?retryWrites=true&w=majority')


app.use(express.json())

app.use('/tasks', router)

app.use(express.static(path.join(__dirname, '../' ))); //serves the index.html

app.listen(3000, () => {
    console.log(`Server listening on port: 3000`);
  });

  module.exports = app;