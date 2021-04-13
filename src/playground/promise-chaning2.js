require('../../src/db/mongoose');
const { findByIdAndDelete } = require('../models/task');
const Task = require('../models/task');

const deleteTasks = async(id)=>{
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed_task:false })
    return count;
}

deleteTasks('606af6b2082d8240f78116f2').then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});

// Task.findByIdAndDelete('606af65d082d8240f78116c7').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed_task:false });
// }).then((task2) => {
//     console.log(task2);
// }).catch((e) => {
//     console.log(e);
// })


