var express = require('express');

var authorize = function (username, password) {
    //UNCOMMENT THIS LINE IF YOU WANT A PASSWORD PROTECTED SITE
    //return 'someone' === username & 'password' === password;
    return true;
};

var configureServer = function() {
    var server = express.createServer(    );

    server.configure(
        function() {
            //any static file from the static directory, just return it to user if requested
            server.use(express.static('public'));
        }
    );
    return server;
};

var port = process.env.PORT || 3000;
var server = configureServer();

//Catch every url call and redirect to index.html
server.get(/^.*$/,
    function (req, res) {
        res.redirect("index.html");
    }
);

server.listen(port);
console.log("static serving: "+__dirname+"/public" )
console.log("listening on port "+port);