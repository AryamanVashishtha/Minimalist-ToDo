const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const Todo = require('./models/todo');

//use express router

app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.listen(port, function(err){
    if(err){
        console.log(`error on port: ${port}`);
    }
    console.log(`server is running on port: ${port}`);
})


 //posting tasks on the database

app.post('/create-task',function(req,res){
    Todo.create({ 
        task: req.body.task,
        category: req.body.cat,
        due_date: req.body.date,
        done: false,}, 
        function(err, newTodo){
            if(err){console.log('Error in creating task');
            return;
        }
        console.log(`******* ${newTodo}`);
        return res.redirect('back');
    });
});

app.get('/delete-task/:id', function(req, res){
    console.log(req.params.id);
    let id = req.params.id

    Todo.findOneAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
        return res.redirect('back');
    })
   
});
