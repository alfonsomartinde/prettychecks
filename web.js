var express = require( "express" ),
    app = express(),
    port = process.env.PORT || 3000;

process.env.PWD = process.cwd()

app.configure(function(){
    app.use(express.static( process.env.PWD + '/dev' ));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    //Error Handling
    app.use(express.logger());
    app.use(express.errorHandler({
            dumpExceptions: true, 
            showStack: true
    }));

    app.use(app.router);
});

app.get('/', function(req, res){
    res.redirect( "/html/index.html" );
    //res.render("index.html")
});

app.listen(port, function() {
    console.log( "Listening on " + port );
});