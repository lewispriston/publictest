const express = require('express');
const app = express();
app.listen(2424, function() {
    console.log('listening on port 2424');
});
app.get('/', function(req, res) {
    res.send('Hello Priston');
})