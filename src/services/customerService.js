const Customer = require("../models/customer");

module.exports = {
    createCustomerService: async (customerData) => {
        try {
            let result = await Customer.create({
                name: customerData.name,
                address: customerData.address,
                phone: customerData.phone,
                email: customerData.email,
                description: customerData.description,
                image: customerData.image
            })

            return result;
        } catch (error) {
            console.log(error);
            return null
        }
    },
    createArrayCustomerService: async (arr) => {
        try {
            let result = await Customer.insertMany(arr);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    getAllCustomerService: async () => {
        try {
            let result = await Customer.find({});
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    updateCustomerService: async (customerUpdate) => {
        try {
            let result = await Customer.updateOne({ _id: customerUpdate.userId }, customerUpdate, { runValidators: true })
            return result
        } catch (error) {
            console.log(error);
            return null;
        }

    },
    deleteACustomerService: async (userId) => {
        try {
            let result = await Customer.deleteById(userId)
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}