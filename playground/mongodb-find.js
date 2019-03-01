// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client) => {
    if (err){
        return console.log('Unable to Connnect to Mongodb Server');
    }
    console.log('Connect To Mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({name:"sarif"}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to Fetch todos', err);
    // });

    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name : 'Sarifudin Abjul'}).toArray().then( (docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    

    // client.close();

});
