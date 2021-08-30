const express = require('express');
const mongoose = require("mongoose");

const app = express();
app.listen(3000, function() {
    console.log('listening on port 3000');
});
mongoose.connect('mongodb://localhost:27017/usersdb', {
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