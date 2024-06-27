const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {MONGO_URL} = process.env;
const port = process.env.PORT || 8081;


mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true});
