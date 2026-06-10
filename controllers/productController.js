const Product = require('../models/Product'); 

// create product

const createProduct = async (req, res) => {

    try {
        if (!req.body.name || !req.body.price || !req.body.description) {

            return res.status(400).json({
                message: "Name, Price and Description are required"
            });
        }

        const newProduct = await Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        });

        res.status(201).json({

            message: "Product Created Successfully",
            product: newProduct
        });
    } catch (error) {
        
        res.status(500).json({
            message: error.message
            })
    }
}

// get all products

const getProducts = async (req, res) => {

    try {
        const products = await Product.find();

        res.status(200).json(products);

    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// get by id 

const getProductBuyId = async (req, res) => {

    try {
        const product = await  Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"

            });
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    };

    //update product 

    const updateProduct = async (req, res) => {

        try {
            const product = await Product.findByIdAndUpdate(
                req.params.id, {

                name: req.body.name,
                price:req.body.price,
                description: req.body.description

            },
             { 
                new: true 
            });

            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            res.status(200).json({
                message: "Product updated successfully",
                product: product
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    // delete product

    const deleteProduct = async (req, res) => {

        try {
             const product = await Product.findByIdAndDelete(req.params.id);

             if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
             }
             res.status(200).json({
                message: "Product deleted successfully"
             });

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

module.exports = {
    createProduct,
    getProducts,
    getProductBuyId,
    updateProduct,
    deleteProduct
};


