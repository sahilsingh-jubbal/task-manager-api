const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})



// const me = new User({
//     name:'Geeta',
//     email:'BABY@gmail.com',
//     password:'Jubbal@123'
// })

// me.save().then((me) => {
//     console.log(me);
// })
//     .catch((e) => {
//         console.log('Error!', e);
//     });;


// const me = new Task({
//     decription: 'hey i am here for Node js',
    
// })

// me.save().then((me) => { console.log(me); })
//     .catch((e) => { console.log('Error!', e); })