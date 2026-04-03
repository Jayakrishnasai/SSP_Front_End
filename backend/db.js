const mongoose = require("mongoose"); 

module.exports = async function connectDB() {
    try {
        const connectionParams = {};
        const useDBAuth = process.env.USE_DB_AUTH || false;
        if(useDBAuth){
            connectionParams.user = process.env.DB_USERNAME;
            connectionParams.pass = process.env.DB_PASSWORD;
        }
        await mongoose.connect(
           process.env.DB_CONN_STR,
           connectionParams
        );
        console.log("Our Backend API is successfully Connected to Mongo database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
