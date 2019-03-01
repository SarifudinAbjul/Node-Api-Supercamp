var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});


// ,{useNewUrlParser: true}
// 'mongodb://localhost:27017/mytrip'

// 'mongodb://Shift:passwordasdf@todosdb-shard-00-00-oriwa.mongodb.net:27017,todosdb-shard-00-01-oriwa.mongodb.net:27017,todosdb-shard-00-02-oriwa.mongodb.net:27017/test?ssl=true&replicaSet=todosdb-shard-0&authSource=admin&retryWrites=true'
module.exports = {mongoose};