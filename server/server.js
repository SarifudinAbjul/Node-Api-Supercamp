// const http = require('http');
// const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var  todo = new Todo ({
        text: req.body.text
    });

    todo.save().then( (doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// Get/ todos /123432

app.get('/todos/:id', (req, res)=> {

    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then( (todo) => {
        if (!todo){
            return res.status(404).send();
        }

        res.send({todo});
    }).catch( (e) => {
        res.status(400).send();
    });
});
// 
// app.delete('/todos/:id', (req, res) => {
//     var id = req.params.id;
  
//     if (!ObjectID.isValid(id)) {
//       return res.status(404).send();
//     }
  
//     Todo.findByIdAndRemove(id).then((todo) => {
//       if (!todo) {
//         return res.status(404).send();
//       }
  
//       res.send({todo});
//     }).catch((e) => {
//       res.status(400).send();
//     });
//   });
// 
// app.patch('/todos/:id', (req, res) => {
//     var id = req.params.id;
//     var body = _.pick(req.body, ['text', 'completed']);
  
//     if (!ObjectID.isValid(id)) {
//       return res.status(404).send();
//     }
  
//     if (_.isBoolean(body.completed) && body.completed) {
//       body.completedAt = new Date().getTime();
//     } else {
//       body.completed = false;
//       body.completedAt = null;
//     }
  
//     Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
//       if (!todo) {
//         return res.status(404).send();
//       }
  
//       res.send({todo});
//     }).catch((e) => {
//       res.status(400).send();
//     })
//   });


app.listen(port, () => {
    console.log(`Started on at Port ${port}`);
});

module.exports = {app};

// var newTodo = new Todo ({
//     text: 'Cook Dinner'
// });


// newTodo.save().then( (doc) => {
//     console.log('Save Todo', doc);
// }, (e) => {s
//     console.log('Unable to save todo');

// });

// var otherTodo = new Todo ({
//     // text: 'Feed the cat',
//     // completed : true,
//     // completedAt: 123
// });

// otherTodo.save().then( (doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });

// User 
// email - require it - trim it - set type - set min of length 1