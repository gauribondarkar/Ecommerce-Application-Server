const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController')




router.get('/', CategoryController.getCategory)
router.put('/collection', CategoryController.getCategoryCollection)


module.exports = router;