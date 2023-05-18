const express = require('express')
const router = express.Router()
const { getHomepage, getABC, getTest, postCreateUser } = require('../comtrollers/homeController')

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/test', getTest);

router.post('/create-user', postCreateUser);


module.exports = router;