const Product = require('../models/Product');




const getProductDetails = async (req, res) => {
    const productId = req.body.productId;
    const productDetails = await Product.findById(productId);
    res.send(productDetails);
}

const getBestSeller = async (req, res) => {
    const bestSeller = await Product.find({bestSeller: true});
    res.send(bestSeller);
}


const getNewArrival = async (req, res) => {
    const newArrival = await Product.find({newArrival: true});
    res.send(newArrival);
}


const getAllProducts = async (req, res) => {
    const allProducts = await Product.find();
    res.send(allProducts);
}



module.exports = {
    getProductDetails,
    getBestSeller,
    getNewArrival,
    getAllProducts
}