const Category = require("../models/Category");
const Product = require("../models/Product")


const getCategory = async (req, res) => {
    const categories = await Category.find();
    res.send(categories);
}

const getCategoryCollection = async (req, res) => {
    console.log("we r inside controller", req.body);
    const categoryId = req.body.categoryId;
    const response = await Category.findById(categoryId);
    
    
    const result = await Product.find({category: [response.title]})
    console.log("this is collection data", result);
    res.send(result);
}

module.exports = {
    getCategory,
    getCategoryCollection
}