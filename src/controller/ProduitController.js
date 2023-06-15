const { response } = require("express")
const Product = require("../model/Produit")

// All
const index = (req, res, next) => {
    Product.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "No data"
        })
    })
}

// User By Id
const show = (req, res, next) => {
    const { name, description, price } = req.body;

    Product.find({$or:[ {name:name}, {description:description}, {description:price} ]})
    .then(response => {
        res.json({
            response
        });
    })
    .catch(error => {
        res.json({
            message: "No product"
        });
    });
}


// Insert
const store = (req, res, next) => {
    let prodcut = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        UserId: req.body.UserId,
    })
    prodcut.save()
    .then(response => {
        res.json({
            message:"bon insert"
        })
    })
    .catch(error => {
        res.json({
            message:"no insert data"
        })
    })
}

//Update
const update = (req, res, next) => {
    let ProductId = req.body.ProductId

    let ProductData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    Product.findByIdAndUpdate(ProductId, {$set: ProductData})
    .then(() => {
        res.json({
            message:"c bon update"
        })
    })
    .catch(error => {
        res.json({
            message:"pas c bon update"
        })
    })
}

// Delete
const destroy = (req, res , next) => {
    let ProductId = req.body.ProductId
    Product.findByIdAndRemove(ProductId) 
    .then(() => {
        res.json({
            message:"c bon delete"
        })
        .catch(error => {
            res.json({
                message:"pas c bon delete"
            })
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}