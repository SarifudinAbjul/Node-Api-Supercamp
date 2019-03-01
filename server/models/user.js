var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email : {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    } 
 });
 
//  var user = new User ({
//  email: 'sarifudin@example.com'
//  });
 
//  user.save().then( (doc) => {
//      console.log('User Saved', doc);
//  }, (e) => {
//      console.log('Unable to Save to User', e);
//  });

 module.exports={User};
