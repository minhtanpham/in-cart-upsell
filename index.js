'use strict';
const mongoose = require('mongoose');
const body = require('body-parser');
const express = require('express');
const path = require("path");
const cors = require('cors');
const server = express();

const api = require('./controller/apis');

require('dotenv').config({path: __dirname + '/.env'})

const MONGO_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

const auth = require('./controller/auth');

console.log(`Connecting to ${MONGO_URL}`);
mongoose.connect(MONGO_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

server.use(body.json());
server.use(cors());

// Serve static files from the React app
server.use(express.static(path.join(__dirname, 'client/build')));

// request database connection
server.use((req, res, next) => {
  req.db = db;
  next();
});

server.use(function(req, res, next) {  
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header("Access-Control-Allow-Origin", process.env.APP_URL)
  next();
});

server.use('/greeting',(req, res) => {
  res.send('Welcome guest!!')
});

server.use('/shopify', auth(db));

server.use('/api', api(db));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

server.listen(PORT);
console.log(`The server is running on port ${PORT}`);