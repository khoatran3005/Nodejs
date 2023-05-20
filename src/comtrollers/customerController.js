const { uploadSingleFile } = require('../services/fileService');
const { createCustomerService, createArrayCustomerService, getAllCustomerService, updateCustomerService } = require('../services/customerService')
const Customer = require("../models/customer");

module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let imageUrl = "";

        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }

        let customerData = {
            name, address, phone, email, description, image: imageUrl
        }

        let customer = await createCustomerService(customerData);

        return res.status(200).json(
            {
                EC: 0,
                data: customer
            }
        )
    },
    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers)
        if (customers) {
            return res.status(200).json(
                {
                    EC: 0,
                    data: customers
                }
            )
        } else {
            return res.status(200).json(
                {
                    EC: -1,
                    data: customers
                }
            )
        }

    },
    getAllCustomers: async (req, res) => {
        let customers = await getAllCustomerService();
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            }
            )
        } else {
            return res.status(200).json(
                {
                    EC: -1,
                    data: customers
                }
            )
        }
    },
    putUpdateCustomers: async (req, res) => {
        let { userId, email, name, city } = req.body;

        let customerUpdate = {
            userId, email, name, city
        }

        let customer = await updateCustomerService(customerUpdate);

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    }

}