const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err, client) => {
    if (err){
        return console.log('Unable to connect to server Mongodb');
    }

        console.log('Connect to Server mongodb');
        const db = client.db('TodoApp');

    // deleteMany
        // db.collection('Todos').deleteMany({name:'sarifudin'}).then((result) => {
        //     console.log(result);
        // }) ;
        
    //deleteOne
        // db.collection('Todos').deleteOne({name :'sarifudin'}).then((result) => {
        //     console.log(result);
        // });

    //findOneandDelete
        db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
            console.log(result);
        });


        // client.close();
});