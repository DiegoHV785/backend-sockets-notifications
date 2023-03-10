const mongoose = require('mongoose');

const dbConnection = async() => {


    try {
        //console.log('init db config');
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error("Error en la base de datos - Hable con Solution DHV");
        
    }
}

module.exports = {
    dbConnection
}