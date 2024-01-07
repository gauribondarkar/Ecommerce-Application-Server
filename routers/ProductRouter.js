const router = require('express').Router();
const ProductController = require('../controllers/ProductController')




router.put('/', ProductController.getProductDetails)
router.get('/bestSeller', ProductController.getBestSeller)
router.get('/newArrival', ProductController.getNewArrival)


module.exports = router;