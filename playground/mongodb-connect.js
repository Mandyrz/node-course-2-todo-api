//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connecte to MongoDb server');
    const db = client.db('TodoApp');

    // var user = {name:'Mandy', age:30};
    // var {name} = user;

    console.log(name);

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'Mandy',
    //     age: '30',
    //     location: 'Spain'
    // }, (err,result)=>{
    //     if(err){
    //         return console.log('Unable to connect');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
});