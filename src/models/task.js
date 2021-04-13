const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    decription: {
        type: String,
        required: true,
        trim: true
    },
    completed_task: {
        type: Boolean,
        default: false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }
},{
    timestamps:true
});

const Task = mongoose.model('Task', taskSchema,'task');

module.exports = Task;