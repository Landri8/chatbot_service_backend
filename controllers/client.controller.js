

const Joi = require('joi');
const clientService = require('../services/client.service');
const { sendResponse } = require('../utils/responseHandler');

const sendMessage = async (req, res) => {
    try {
        const body = req.body;

        const validator = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.any().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().required(),
            companyName: Joi.string().required(),
            country: Joi.string().required(),
            jobTitle: Joi.string().required(),
            jobDetails: Joi.string().required(),
        })

        const {error} = validator.validate(body);

        if (error) throw new Error("Bad Request")

        const messageData = clientService.sendMessage(body);

        sendResponse(res, 200, "Message Sent!", messageData);
    } catch (e) {
        console.log(e)
        sendResponse(res, 400, e.message, null)
    }
}

module.exports = {
    sendMessage
}