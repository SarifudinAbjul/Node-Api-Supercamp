// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// const client = new MongoClient('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },);

// 	  client.connect((err, db) => {
// 	if (err) {
// 		return console.log('unable to connect to server');
// 	}
// 		console.log('connect to server');
// 	const db = db.db('TodoApp');


// //Create Data
//  db.collection('User').insertOne({
//  	email	: 'ferry12@gmail.com',
//  	password	: 12345,
//  	location: 'Yogyakarta'
//  },   (err, result) => {
//  	if (err) {
//  		return console.log('unable to insert User',);
//  	}
//  	console.log(result.ops)
//  });

//   client.close();
// });

// var obj = ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client) => {
    if (err){
        return console.log('Unable to Connnect to Mongodb Server');
    }
		console.log(`\n	
		==================================================================
		=    ====  =          =        ===        =========    =        ==
		=  =  ===  =  ======  =  =====  ==  =================  =  ========
		=  ==  ==  =  ======  =  ======  =  =================  =  ========
		=  ===  =  =  ======  =  ======  =      =============  =        ==
		=  ====    =  ======  =  ======  =  =================  =======  ==
		=  =====   =  ======  =  =====  ==  ===========  ====  =======  ==
		=  ======  =          =        ===        ==  ==      ==        ==
		==================================================================  \n
		Connected to Mongodb Server`);
        const db = client.db('TodoApp');

//         db.collection('Todos').insertOne({
//             text:'Something To Do ok',
//             completed: false
//         }, (err, result) => {
//             if (err){
//                 return console.log('Unable to insert todo', err);
//             }
//             // console.log(JSON.stringify(result.ops, undefined,2));
//             console.log(result.ops[0]._id.getTimestamp());

//         });

//         db.collection('Users').insertOne({
//             name: 'Sarifudin',
//             age: 25,
//             location:'bolmut',
//         }, (err, result) => {
//             if(err){
//                 return console.log('Unable to insert todo', err);
//             }

//             console.log(result.ops);

//         });

//         client.close();

// });

// const assert = require('assert');
// // Connection URL
// const url = 'mongodb://localhost:27017';
// // Database Name
// const dbName = 'mytrip';
// // Create a new MongoClient
// const client = new MongoClient(url);
// // Use connect method to connect to the Server
// client.connect(function(err){
//   { useNewUrlParser: true }
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);
//   db.collection('Todos').insertOne({
//     text:'Something To do',
//     completed:false
//   });

//   db.collection('Users').insertOne({
//     // _id:1,
//     name:'Sarifudin Abjul',
//     age:25,
//     location: 'boroko'
//   }, (err, result) => {
//     if (err){
//       return console.log('Unable to insert user', err);
//     }

// 
//   });

  client.close();
});