var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    nome:{type:String, required : true},
    
});

module.exports = mongoose.model('User', userSchema);