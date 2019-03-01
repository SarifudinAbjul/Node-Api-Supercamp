const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err){
        return console.log('Unable to connect server mongodb ');
    }
        console.log('Connect to Mongodb Server');
        const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c6822433af41a1eefb7f583')
    // }, {
    //     $set:{
    //         text:'shomething To do Update'
    //     }
            
    // }, {
    //     returnOriginal:false
    // }).then( (result) => {
    //     console.log(result);
    // });


        db.collection('Users').findOneAndUpdate({
            _id : new ObjectID('5c6822433af41a1eefb7f584')
        }, {
            $set: {
                name:'Shift Iman'
            },
            $inc: {
                age:20
            }
                
        }, {
            returnOriginal:false
        }).then( (result) => {
            console.log(result);
        });

    client.close();
});