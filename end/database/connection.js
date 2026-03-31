const mongoose = require('mongoose');
const {mongoURI} = require('../config');

const conectarDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB conectado - restaurante");
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};
module.exports = conectarDB;