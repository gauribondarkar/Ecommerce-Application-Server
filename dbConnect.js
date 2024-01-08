const mongoose = require('mongoose');
const dotenv = require('dotenv').config('./env');

module.exports = async() =>{
    const mongoUri = process.env.MONGOURI;
    try {
        const connect = await mongoose.connect(mongoUri);

        console.log(`mongodb connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    
}

