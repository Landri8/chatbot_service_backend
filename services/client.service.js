const messageModel = require('../models/message.model');
const { generateOTP } = require('../utils/commonUtil');
const blogModel = require('../models/blog.model');

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

module.exports = {
    sendMessage,
    getBlogList
}