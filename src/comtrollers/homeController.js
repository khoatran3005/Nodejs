const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let result = await getAllUsers();
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

    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) values(?, ?, ?)`, [email, name, city]
    );

    res.send('Create user sucess!');
}


const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId);
    res.render('edit.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {

    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    await updateUserById(email, name, city, userId)

    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId);
    res.render('delete.ejs', { userEdit: user });
}

const postHandleRemoveUser = async (req, res) => {
    let userId = req.body.userId;

    await deleteUserById(userId)

    res.redirect('/');
}

module.exports = {
    getHomepage, getABC, getTest,
    postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser,
    postDeleteUser, postHandleRemoveUser
};