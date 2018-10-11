const express = require('express');
var path = require('path');
const app = express();
var port = process.env.PORT || 3003;
// Server routes...
app.get('/hello',(req,res)=> res.send({cm:'What superpower would you like? To fly or be invisible?'}));
app.get('/api',(req,res)=> res.send({link:'./apidocumentation'}));
app.get('/api/cm',(req,res)=> res.send(
    {cm:{
        titel:'What superpower would you like? To fly or be invisible?'},
        cat:"casual"
     }
));


    console.log('We are in alive mode')


app.use(express.static(path.join(__dirname, 'source'))); //  "public" off of current is root

console.log('Start to listen')
app.listen(port);