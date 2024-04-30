const Todo = require('../models/todo')

module.exports.home = async function(req,res){
    const task = await Todo.find({})
        return res.render('home',{
            title: "To Do List",
            todo_list : task,
        });
};

module.exports.create = function(req, res){
    return res.render('home', {
        title: "home",
    })
}

