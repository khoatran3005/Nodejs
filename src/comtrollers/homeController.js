const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDService')

const User = require('../models/user')
const getHomepage = async (req, res) => {
    let result = await User.find({});
    return res.render("homepage.ejs", { listUsers: result })
}

const getABC = (req, res) => {
    res.send("Hello world from ABC");
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    await User.create({
        email: email,
        name: name,
        city: city
    })

    res.redirect('/');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await User.findById(userId).exec();;
    res.render('edit.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {

    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    // await updateUserById(email, name, city, userId)
    await User.updateOne({ _id: userId }, { email: email, name: name, city: city })
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let user = await User.findById(userId).exec();;
    res.render('delete.ejs', { userEdit: user });
}

const postHandleRemoveUser = async (req, res) => {
    let userId = req.body.userId;

    await User.deleteOne({ _id: userId });
    res.redirect('/');
}

module.exports = {
    getHomepage, getABC, getTest,
    postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser,
    postDeleteUser, postHandleRemoveUser
};