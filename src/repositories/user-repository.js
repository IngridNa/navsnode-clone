var User = require('../app/models/user');
var mongoose = require('mongoose');

exports.get = async () => {
    const res = await User.find();
    return res;
}


exports.getById = async (id) => {
    const res = await User.findById(id);
    return res;
}

exports.put = async (id, data) => {
    await User.findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
            email: data.email,
            password: data.password
        }
    });
}

exports.post = async (data) => {
    var user = new User(data);
    await user.save();
}

exports.delete = async (id) => {
    await User.findOneAndRemove(id);
}