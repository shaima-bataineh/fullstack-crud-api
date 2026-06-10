const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProducts,
    getProductBuyId,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

router.post("/", createProduct);

router.get("/", getProducts);

router.get("/:id", getProductBuyId);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
