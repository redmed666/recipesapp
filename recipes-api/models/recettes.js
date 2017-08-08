var mongoose = require('mongoose');

var infoSchema = new mongoose.Schema({
    type: String
});

var globalSchema = mongoose.Schema({
    global: [infoSchema]
});

mongoose.model('recettes', infoSchema);
