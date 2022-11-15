const mongoose  = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => {

    //Connecting to the database
    mongoose.connect(MONGO_URI, {
        useNewURlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // userFindAndModify: false
    })
    .then(() => {
        console.log('Successfully connected to database');
    })
    .catch((error) => {
        console.log("Error connecting to database");
        console.log(error);
        process.exit(1);
    });
};