var mongo = require('mongodb');
var api = require('../models/db.js');
var mongoClient = mongo.MongoClient;
const dbRecipes = "mongodb://dbrecipes/recettes";

module.exports.getPlats = function(req, res) {
    mongoClient.connect(dbRecipes, function(err, db) {
        if(err) {
            return console.dir(err);
        }
        db.listCollections().toArray(function(err, collInfos) {
            if(err) {
                console.log('error');
            } else {
                console.log(JSON.stringify(collInfos));
                var collInfosJson = JSON.stringify(collInfos);
                res.setHeader('Content-Type', 'application/json');
                res.send(collInfosJson);
            }
        });
    });
};

module.exports.getRecettes = function(req, res) {
    mongoClient.connect(dbRecipes, function(err, db) {
        if(err) {
            return console.dir(err);
        }
        var plat = req.params.plat;
        var platCollection = db.collection(plat.toString());
        platCollection.find().toArray(function(err, items){
            if(err) {
                return console.dir(err);
            } else {
                var recettes = [];
                items.forEach(function(item) {
                    var name = item["Référence;Nom;Origine;Saison;V"];
                    var recette = name[" papier;Temps;Remarques"];

                    if(typeof recette === 'undefined') {

                    } else {
                        var recetteSplitted = recette.split(';');
                        recettes.push(recetteSplitted);
                    }
                });
                items.forEach(function(item) {
                    var name = item["Référence;Nom;Origine;Saison;V"];
                    var recette = name[" papier;Temps ;Remarques"];

                    if(typeof recette === 'undefined') {

                    } else {
                        var recetteSplitted = recette.split(';');
                        recettes.push(recetteSplitted);
                    }
                });
                res.send(recettes);
            }
        });
    });
};

module.exports.createPlat = function(req, res) {

};

module.exports.createRecette = function(req, res) {

};
