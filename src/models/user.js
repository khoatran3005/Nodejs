const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String
});

userSchema.plugin(mongoose_delete);

const User = mongoose.model('user', userSchema);

module.exports = User;