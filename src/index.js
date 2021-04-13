const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./db/mongoose');
const userRouter = require('../src/routers/user');
const taskRouter = require('./routers/task');

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`server is on at port ${port}`);
})



// const Task = require('./models/task');
// const main = async () => {
//     const task = await Task.findById('60703e8d0f0d103684586015');
//     await task.populate('owner').execPopulate();
//     console.log(task.owner);
// }
// main();

// const jwt = require('jsonwebtoken');
// const myFunction = async () => {
//     const token = jwt.sign({ _id: '123abc' }, 'thisismynodecourse', { expiresIn: '7 days' });
//     const data = jwt.verify(token, 'thisismynodecourse');
//     console.log(data);
// }
// myFunction();


// const bcrypt = require('bcryptjs');
// const myFunction = async()=>{
//     const password = 'red@123';
//     const hashedPassword = await bcrypt.hash(password, 8);
//     console.log(password);
//     console.log(hashedPassword);
// }
// myFunction();




// app.use((req, res, next) => {
//     if (req.method == 'GET') {
//         res.send('GET method is not allowed!');
//     } else {
//         next();
//     }
// })

//maintannace message
// app.use((req, res, next) => {
//     res.status(503).send('Maintanance mode');
// })



//multer
// const multer = require('multer');
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         // if(!file.originalname.endsWith('.pdf')){
//         //     return cb(new Error('please upload only pdf'));
//         // }
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('please upload word document!'));
//         }
//         cb(undefined, true);
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send();
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message});
// })