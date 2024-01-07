// const mongoose = require('mongoose');

// module.exports = async() =>{
//     const mongoUri = "mongodb+srv://gauribo17:8sKaV1hdY3e7SIO6@cluster0.xocruzr.mongodb.net/?retryWrites=true&w=majority";
//     try {
//         const connect = await mongoose.connect(mongoUri);

//         console.log(`mongodb connected: ${connect.connection.host}`)
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
    
// }

const mongoose = require('mongoose');

module.exports = () => {
    
    mongoose.connect("mongodb://0.0.0.0/Ecommerce");
    const conn = mongoose.connection;

    conn.once('open', () => {
        console.log("connected...");
    })

    conn.on('error', () => {
        console.log("error");
        process.exit();
    })
}