process.env.PWD = process.cwd();
var express = require("express");
var app = express();
app.use(express.logger());

app.configure(function() {
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(express.static(process.env.PWD + '/dev'));
});

app.get('/', function(request, response) {
    response.send('Server OK!');
});

var port = process.env.PORT || 9000;
app.listen(port, function() {
    console.log("Listening on " + port);
});