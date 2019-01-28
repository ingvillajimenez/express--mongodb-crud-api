const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
    // name: {
    //     type: String,
    //     required: true
    // }
});

module.exports = mongoose.model('Company', Schema);