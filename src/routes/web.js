const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World & nodemon!')
})

router.get('/abc', (req, res) => {
    res.send('Hello World! from abc')
})

router.get('/test', (req, res) => {
    // res.send('<h1>Hello World! from abc</h1>')
    res.render('sample.ejs')
})

module.exports = router;