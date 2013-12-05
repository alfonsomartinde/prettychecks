var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    response.send('Server OK!');
});

var port = process.env.PORT || 9000;
app.listen(port, function() {
    console.log("Listening on " + port);
});