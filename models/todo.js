const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    task :{
        type: String,
        required: true,
    },
    category :{
        type: String,
        required: false,
    },
    due_date : {
        type: Date,
        required: false,
    },
    done: {
        type: Boolean,
        required:false,
    }
})

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;