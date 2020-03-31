var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    nome:{type:String, required : true},
    preco:Number,
    descricao:String,
    categoria:{type:Schema.Types.ObjectId, ref:"Categoria", required: true}

});

module.exports = mongoose.model('Produto', productSchema);

