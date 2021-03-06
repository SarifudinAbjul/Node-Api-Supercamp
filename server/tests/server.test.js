const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id : new ObjectID(),
    text: 'first test todo'
}, {
    _id : new ObjectID(),
    text: 'second test todo'
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then( () => done());
});


describe('POST/todos', () => {
    it('Should create a new todo', (done) => {
        var text = 'Text todo text';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if(err){
                return done(err);
            }

            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        });
    });  

    it('Should not create todo with invaalid body data', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end( (err, res) => {
            if(err){
                return done(err);
            } 

        Todo.find().then( (todos) => {
            expect(todos.length).toBe(2);
            done();
        }).catch( (e) => done(e));
      });
    });
});

describe('GET/todos', () => {
    it('Should get all todo', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect( (res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});

describe('GEt/todos/:id', () => {
    it('Should return todo doc', (done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect( (res) => {
            expect(res.body.todo.text).toBe(todos[0].text)
        })
        .end(done);
    });

    it('Should return 404 if todo not found', (done) => {
        var hexId = new ObjectID().toHexString();
        //make sure you get 404 back
        request(app)
        .get(`/todos/${hexId}`)
        .expect(404)
        .end(done);

    });

    it('Should return 404 for non-object ids', (done) => {
        
        // /todos/123
        request(app)
        .get('/todos/123abc')
        .expect(404)
        .end(done);

    });
});

// describe('DELETE /todos/:id', () => {
//     it('should remove a todo', (done) => {
//       var hexId = todos[1]._id.toHexString();
  
//       request(app)
//         .delete(`/todos/${hexId}`)
//         .expect(200)
//         .expect((res) => {
//           expect(res.body.todo._id).toBe(hexId);
//         })
//         .end((err, res) => {
//           if (err) {
//             return done(err);
//           }
  
//           Todo.findById(hexId).then((todo) => {
//             expect(todo).toNotExist();
//             done();
//           }).catch((e) => done(e));
//         });
//     });
  
//     it('should return 404 if todo not found', (done) => {
//       var hexId = new ObjectID().toHexString();
  
//       request(app)
//         .delete(`/todos/${hexId}`)
//         .expect(404)
//         .end(done);
//     });
  
//     it('should return 404 if object id is invalid', (done) => {
//       request(app)
//         .delete('/todos/123abc')
//         .expect(404)
//         .end(done);
//     });
//   });