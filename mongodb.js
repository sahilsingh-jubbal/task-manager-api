// crud opearatoin
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID();
// const id = ObjectID;
// console.log(id);
// console.log(id.getTimestamp());

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log("unable to connect to database");
//     }

//     const db = client.db(databaseName);
//     db.collection('users').insertOne({
//         _id:id,
//         name:'Anokhi',
//         age:21
//     },(error,result)   =>{
//         if(error){
//             return console.log('Unable to insert');
//         }
//         console.log(result.ops);
//     })

//     // db.collection('users').insertMany([{
//     //     name: 'jan',
//     //     age: 20
//     // },
//     // {
//     //     name: 'rohan',
//     //     age: 30
//     // }], (error, result) => {
//     //     if (error) {
//     //         return console.log('Unable to insert');
//     //     }
//     //     console.log(result.ops);
//     // })


//     // db.collection('tasks').insertMany([{
//     //     name: 'wow',
//     //     yes: true
//     // }, {
//     //     name: 'wow2',
//     //     yes: false
//     // }, {
//     //     name: 'wow3',
//     //     yes: true
//     // }],(error,result)=>{
//     //     if(error){
//     //         return console.log('Unable to insert documents');
//     //     }
//     //     console.log(result.ops);
//     // })


// })




//READ DATA FROM DATA BASE
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log("unable to connect to database");
//     }

//     const db = client.db(databaseName);
//     // db.collection('users').findOne({ _id:ObjectID('60573db7a942b41df45e5618') }, (error, user) => {
//     //     if (error) {
//     //         return console.log('Unable to fetch');
//     //     }
//     //     console.log(user);
//     // })

//     db.collection('tasks').find({yes:  false}).toArray((error, users) => {
//         console.log(users);
//     })


// })


// UPDATE DATA IN DATABASE
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log("unable to connect to database");
//     }

//     const db = client.db(databaseName);
//     // const updatePromise = db.collection('users').updateOne({
//     //     _id: ObjectID('605205a9f9b078074c60b86b')
//     // },
//     //     {
//     //         $inc: {
//     //             age: 2
//     //         }
//     //     });

//     const updatePromise = db.collection('tasks').updateMany({
//         yes: false
//     },
//         {
//             $set: {
//                 yes: true
//             }
//         });

//     updatePromise.then((res) => console.log(res))
//         .catch((e) => {
//             console.log('not found!');
//         })
// })


// DELETED DATA IN DATABASE
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("unable to connect to database");
    }

    // const db = client.db(databaseName);
    // db.collection('users').deleteMany({
    //     age: 21
    // }).then((res) => console.log(res))
    //     .catch((e) => console.log('unable to find!'))

    const db = client.db(databaseName);
    db.collection('tasks').deleteOne({
        name: 'wow'
    }).then((res) => console.log(res))
        .catch((e) => console.log('unable to find!'))
})