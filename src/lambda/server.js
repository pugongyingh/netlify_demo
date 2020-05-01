var mongodbUri = require('mongodb-uri');
const mongoose = require('mongoose')
require("dotenv").config();


const uri = process.env.MONGO_URI;

var mongooseConnectString = mongodbUri.formatMongoose(uri);
mongoose.connect(mongooseConnectString,  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

var cluster = mongoose.connection;
cluster.on('error', console.error.bind(console, 'Connection error: '));
cluster.once('open', function callback () {
    console.log('Successfully connected to MongoDB');
});

