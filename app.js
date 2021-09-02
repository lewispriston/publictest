const express = require('express');

// import { TextEncoder, TextDecoder } from 'util'
const TextEncoder = require('util');
const TextDecoder = require('util');
const mongoose = require("mongoose");
// global.TextEncoder = TextEncoder
// global.TextDecoder = TextDecoder
const app = express();
app.listen(3000, function() {
    console.log('listening on port 3000');
});
mongoose.connect('mongodb://1fd6c41fef3a:37017/usersdb', {
    useNewUrlParser: true
});
var glob = "hello"
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully");
    glob = "Connected successfully"
});
app.get('/', function(req, res) {
    res.send('Hello Priston lewis Lissssa' + glob);
})