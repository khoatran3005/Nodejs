const express = require('express')
const routerAPI = express.Router()

const { getUsersAPI, createUsersAPI, putUpdateUserAPI, deleteUserAPI,
    postUploadSingleFileApi, postUploadMultipleFilesAPI } = require('../comtrollers/apiController')
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomers } = require('../comtrollers/customerController')

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', createUsersAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadMultipleFilesAPI);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomers);

module.exports = routerAPI; 