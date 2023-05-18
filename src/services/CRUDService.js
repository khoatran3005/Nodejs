const connection = require('../config/database')

const getAllUsers = async () => {
    let [result, fields] = await connection.query('select * from Users');
    return result;
}

module.exports = {
    getAllUsers
}