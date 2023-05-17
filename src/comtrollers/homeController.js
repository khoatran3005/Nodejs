const getHomepage = (req, res) => {
    res.send('Hello world from Khoa Tran')
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