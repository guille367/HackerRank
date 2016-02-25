var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname));

app.get('/index.html',function(req,res){
    
});

app.get('/serviuCall',function(req,res){
    fs.readFile('pruebaalgoritmos.txt',function(err,data){
        //res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
    
});

app.listen(8092);

console.log('rannin at eiti nainti chu');