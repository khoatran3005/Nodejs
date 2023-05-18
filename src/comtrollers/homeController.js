const connection = require('../config/database')

const getHomepage = (req, res) => {

    return res.render("homepage.ejs")
}

const getABC = (req, res) => {
    res.send("Hello world from ABC");
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getTest
}