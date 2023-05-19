const User = require('../models/user')
const { uploadSingleFile } = require('../services/fileService')

const getUsersAPI = async (req, res) => {
    let result = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

const createUsersAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let user = await User.create({
        email: email,
        name: name,
        city: city
    })

    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const putUpdateUserAPI = async (req, res) => {

    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    // await updateUserById(email, name, city, userId)
    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city })

    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    let userId = req.body.userId;

    let result = await User.deleteOne({ _id: userId });

    return res.status(200).json({
        EC: 0,
        data: result
    })

}

const postUploadSingleFileApo = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await uploadSingleFile(req.files.image);
    console.log('check result', result)

    return res.send("ok single")
}

module.exports = {
    getUsersAPI, createUsersAPI,
    putUpdateUserAPI, deleteUserAPI,
    postUploadSingleFileApo
};