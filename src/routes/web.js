const express = require('express')
const router = express.Router()
const { getHomepage, getABC, getTest } = require('../comtrollers/homeController')

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/test', getTest)

module.exports = router;