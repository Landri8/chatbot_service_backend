const faqModel = require('../models/faq.model');

const getFAQList = async () => {
    try {
        const faqs = await faqModel.find({}, {_id: 0});
        return faqs;
    } catch (e) {
        throw e;
    }
}

const getFAQInfo = async (id) => {
    try {
        const faq = await faqModel.findOne({id: id}, {_id: 0});
        return faq;
    } catch (e) {
        throw e;
    }
}

const createFAQ = async (body) => {
    try {
        const faq = await faqModel.create(body);
        return faq;
    } catch (e) {
        throw e;
    }
}

const updateFAQ = async (body) => {
    try {
        const faq = await faqModel.findOne({id: body.id});

        if (!faq) {
            throw new Error('Question not found');
        }

        faq.question = body.question;
        faq.answer = body.answer;

        await faq.save();
        return faq;
    } catch (e) {
        throw e;
    }
}

const deleteFAQ = async (body) => {
    try {
        const faq = await faqModel.findOne({id: body.id});
        if (!faq) {
            throw new Error('Question not found');
        }

        await faqModel.deleteOne({id: body.id});

        return {
            id: faq.id,
        };
    } catch (e) {
        throw e;
    }
}

module.exports = {
    getFAQList,
    getFAQInfo,
    createFAQ,
    updateFAQ,
    deleteFAQ
}