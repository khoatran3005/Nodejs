const express = require('express')
const routerAPI = express.Router()

const { getUsersAPI, createUsersAPI, putUpdateUserAPI, deleteUserAPI } = require('../comtrollers/apiController')

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', createUsersAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

module.exports = routerAPI; 