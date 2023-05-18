const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')

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

    console.log('check result', results);

    res.send('Create user sucess!');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage, getABC, getTest,
    postCreateUser, getCreatePage
};