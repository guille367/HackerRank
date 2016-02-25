var express = require('express');
var app = express();

app.use(express.static('C:/Users/Barbacil01/Desktop/El guille/HR/index.html'));

app.get('/',function(req,res){
    res.send('C:/Users/Barbacil01/Desktop/El guille/HR/index.html');
});

app.listen(8092);

console.log('running at eiti nainti chu');