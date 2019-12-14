var express = require('express');
const app = express();

app.get('/routes',(req, res)=>{
    res.json('All routes files')
});

app.get('/dashboard/:name', (req,res)=>{
    res.json(`Welcome Mr/Mrs ${req.params.name} to simple node app`);
})

module.exports = app;