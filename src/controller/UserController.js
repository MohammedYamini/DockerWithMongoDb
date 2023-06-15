const { response } = require("express")
const User = require("../model/User")

// All
const index = (req, res, next) => {
    User.find()
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
    let UserId = req.body.UserId
    User.findById(UserId)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "No user"
        })
    })
}

// Insert
const store = (req, res, next) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        birthday: req.body.birthday,
    })
    user.save()
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
    let UserId = req.body.UserId

    let UpdateData = {
        name: req.body.name,
        email: req.body.email,
        birthday: req.body.birthday,
    }
    User.findByIdAndUpdate(UserId, {$set: UpdateData})
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
    let UserId = req.body.UserId
    User.findByIdAndRemove(UserId) 
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