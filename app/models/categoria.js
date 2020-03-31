var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var categorySchema = new Schema({
    nome:{type:String, required : true},
    produto:{type:Schema.Types.ObjectId, ref:"Produto", required: true}
});

module.exports = mongoose.model('Categoria', categorySchema);