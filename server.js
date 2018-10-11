const express = require('express');

const app = express();
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
    app.use(express.static('source'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'source/index.html'))
    })

app.listen(process.env.PORT || 3003,()=>console.log('Listening'));
