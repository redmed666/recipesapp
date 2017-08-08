mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://dbrecipes/recettes';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Successfully connected to the DB');
});

mongoose.connection.on('error', function(err) {
    console.log('Error during connection to the mongodb. Error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Disconnected from the DB');
});

gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.once('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});

process.once('SIGTERM', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});

require('./recettes');
