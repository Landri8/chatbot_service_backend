const faqService = require('../services/faq.service');
const { sendResponse } = require('../utils/responseHandler');
const Joi = require('joi');

const getFAQList = async (req, res) => {
    try {
        const faqListData = await faqService.getFAQList();

        sendResponse(res, 200, 'FAQ list fetched', faqListData);
    } catch (e) {
        sendResponse(res, 400, 'Failed', e.message);
    }
}

const createFAQ = async (req, res) => {
    try {
        const body = req.body;
        const validator = Joi.object({
            question: Joi.string().required().min(3),
            answer: Joi.string().required().min(3)
        })

        const {error} = validator.validate(body);
        console.log("Error",error)
        if (error) throw error;

        const faqCreatedData = await faqService.createFAQ(body);

        sendResponse(res, 200, 'Question created', faqCreatedData);
    } catch (e) {
        console.log(e)
        sendResponse(res, 400, 'Failed', e.message);
    }
}

const updateFAQ = async (req, res) => {
    try {
        const body = req.body;
        let validator = Joi.object({
            id: Joi.string().required(),
            question: Joi.string().required().min(3),
            answer: Joi.string().required().min(3),
        })

        const {error} = validator.validate(body);
        if (error) throw new Error("Bad Request");

        const faqUpdatedData = await faqService.updateFAQ(body);
        sendResponse(res, 200, 'FAQ updated', faqUpdatedData);
    } catch (e) {
        console.log(e)
        sendResponse(res, 400, e.message, {});
    }
}

const deleteFAQ = async (req, res) => {
    try {
        const body = req.body;

        if (!('id' in body)) throw new Error('Bad Request');
        const faqDeletedData = await faqService.deleteFAQ(body);
        sendResponse(res, 200, 'FAQ deleted successfully', faqDeletedData);
    } catch (e) {
        console.log(e)
        sendResponse(res, 400, 'Failed', e.message);
    }
}

const getFAQInfo = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('Bad Request');
        const faqData = await faqService.getFAQInfo(id);

        sendResponse(res, 200, 'Question info fetched successfully', faqData);
    } catch (e) {
        sendResponse(res, 400, 'Failed', e.message);
    }
}

module.exports = {
    getFAQInfo,
    createFAQ,
    deleteFAQ,
    getFAQList,
    updateFAQ
}