const mongoose = require('mongoose');
const DB_URI = "mongodb+srv://mauryahimanshu567:mWkUon0OxW6kPnDD@msend-cluster.ar3gh.mongodb.net/?retryWrites=true&w=majority&appName=msend-cluster"

const databaseConnect = () => {
    // mongoose.set("strictQuery", false);
    mongoose.connect(DB_URI);
    mongoose.connection.on('connected', function () {
    });
    mongoose.connection.on('error', function (err) {
        console.log(`
            Error while connecting database
            Error reason: ${err.message}
        `);
       
    });
    mongoose.connection.on('disconnected', function () {
        console.log("Database Disconnected");
    });
};
module.exports = databaseConnect;