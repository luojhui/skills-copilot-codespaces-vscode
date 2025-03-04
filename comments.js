// Create web server and listen to port 3000
// Use express to create server and listen to port 3000
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var comments = require('./comments.json');
var _ = require('underscore');

// Use bodyParser to parse the body of the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
