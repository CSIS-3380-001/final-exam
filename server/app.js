// app.js
const http = require('http');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
let router = require('./router');

// Import .env vars
dotenv.config();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(cors());

// Routes
app.use('/api', router);

// After Routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

/**
 * Create HTTP server.
 */
let port = process.env.PORT || '5000';
app.set('port', port);
let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
const start = async () => {
  await connectDB();


  server.listen(port);
  server.on('error', (err) => console.log(err));
  server.on('listening', function () {
    console.log(`Listening on localhost:${port}`);
  });
}

// Spin up the server
start();