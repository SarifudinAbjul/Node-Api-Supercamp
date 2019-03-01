const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5c6e16994e61bb3d22387d6a';
// Todo.find({
//     _id: id
// }).then( (todos) => {
//     console.log('Todos', todos);
// });


// Todo.findOne({
//     _id: id
// }).then( (todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then( (todo) => {
//     if (!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo by ID', todo);
// });

// User.findById(id).then( (user) => {
//     if (!user){
//         return console.log('Id not found');
//     }
//     console.log('User by Id', user);
// }).catch( (e) => console.log(e));


User.findById('5c6cc82e23d5d1531b79b159').then( (user) => {
    if (!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));

}, (e) => {
    console.log(e);
});
