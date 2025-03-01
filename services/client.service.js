const messageModel = require('../models/message.model');
const blogModel = require('../models/blog.model');
const faqModel = require('../models/faq.model');

const sendMessage = async (body) => {
    try {
        const message = await messageModel.create(body);

        return {
            ...message.toObject(),
            _id: undefined
        };
    } catch (e) {
        throw e;
    }
}

const getBlogList = async () => {
    try {
        const blogs = await blogModel.find({}, {_id: 0}).sort({createdAt: -1});

        return blogs;
    } catch (error) {
        throw error;
    };
}

const getFAQList = async () => {
    try {
        const faqs = await faqModel.find({}, {_id: 0});
        return faqs;
    } catch (e) {
        throw e;
    }
}

const getBlogById = async (id) => {
    try {
        const blog = await blogModel.findOne({id: id}, {_id: 0});

        return blog;
    } catch (error) {
        throw error;
    };
}

module.exports = {
    sendMessage,
    getBlogList,
    getBlogById,
    getFAQList
}