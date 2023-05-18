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

const postCreateUser = (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log('check email,', email, "name = ", name, "city=", city);

    connection.query(
        `INSERT INTO Users(email, name, city) 
        values(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);

            res.send(' Created user succeed!')
        }
    );
}

module.exports = {
    getHomepage, getABC, getTest,
    postCreateUser
}