var http = require('http');
const { json } = require('stream/consumers');

//var data={name:"mehmood",age:"20",mail:"abc2gmail.com"}   for single data below is for array

var data=[
    {name:"mehmood",age:"20",mail:"abc2gmail.com"},
    {name:"imran",age:"20",mail:"abc2gmail.com"}
    ]
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(5002)