var http = require('http');
var express = require('express');
var app = new express();



var server = http.createServer(app);
app.use(express.static('public'));

app.get("/",function(req,res)
{
    res.render('index');
});

server.listen(3000,function()
{
    console.log('Server listening in port 3000');
});