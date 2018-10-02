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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b9fe95ea9ba0b4204a29303')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log('Todos number', count);
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Users').find({name: 'Mandy'}).count().then((count)=>{
        console.log('Mandys count:', count);
    },(err)=>{
        console.log('Something went wrong', err);
    })

    //client.close();
});