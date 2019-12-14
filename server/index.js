var express = require('express');
var taskRoutes = require('./routes/taskRoutes');

var app = express();

app.use('/api/v1', taskRoutes)

app.get('/', function(req, res){
    res.status(200).json({
        message: 'Welcome to my app'
    });
});

app.use('*',function(req,res){
    res.json(`<h1 style="text-align:center">404 No Found</h1>`);
});

app.listen(3400, function(){console.log('App started on port 3400')});

module.exports = app;