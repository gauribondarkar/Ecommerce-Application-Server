const express = require('express');
const dotenv = require('dotenv').config('./env');
const dbConnect = require('./dbConnect');
const morgan = require('morgan');
const cloudinary = require('cloudinary').v2;
const CategoryRouter = require('./routers/CategoryRouter')
const ProductRouter = require('./routers/ProductRouter')
const cors = require('cors');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
const app = express();

app.use(express.json({limit: '10mb'}));
app.use(morgan("common"));

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
            
}))
app.get('/', (req, res) => {
    res.send("ok from server");
})
app.use('/category', CategoryRouter)
app.use('/product', ProductRouter)
app.use('/home', ProductRouter)


dbConnect();

const PORT = process.env.PORT || 6001;
app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});

