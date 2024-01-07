const dbConnect = require('./dbConnect');
const Product = require('./models/Product');
const Category = require('./models/Category');


const productJson = require("./product.json");
const categoryJson = require("./category.json");
const start = async () => {
    try {
        await dbConnect("mongodb://0.0.0.0/Ecommerce");
        await Product.deleteMany();
        await Product.create(productJson);

        await Category.deleteMany();
        await Category.create(categoryJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}
start();