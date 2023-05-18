const express = require('express')
const router = express.Router()
const { getHomepage, getABC, getTest, postCreateUser,
    getCreatePage, getUpdatePage } = require('../comtrollers/homeController')

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/test', getTest);

router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);


module.exports = router;