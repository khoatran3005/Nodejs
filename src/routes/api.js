const express = require('express')
const routerAPI = express.Router()

const { getUsersAPI, createUsersAPI, putUpdateUserAPI, deleteUserAPI,
    postUploadSingleFileApo } = require('../comtrollers/apiController')

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', createUsersAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApo);

module.exports = routerAPI; 