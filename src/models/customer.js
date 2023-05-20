const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: String,
    phone: String,
    email: String,
    description: String,
    image: String
},
    { timestamps: true }
);

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;