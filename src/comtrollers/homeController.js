const connection = require('../config/database')

const getHomepage = (req, res) => {

    let user = [];

    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            user = results;
            console.log(results);

            console.log(user);
            res.send(JSON.stringify(user));
        }


    );
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