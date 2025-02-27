const messageModel = require('../models/message.model');

const getMessageList = async () => {
    try {
        const messages = await messageModel.find({}, {_id: 0});
        return messages;
    } catch (e) {
        throw error;
    }
}

const getMessageInfo = async (id) => {
    try {
        const message = await messageModel.findOne({id: id}, {_id: 0});

        return message;
    } catch (e) {
        throw error;
    }
}

const updateMessageToMarkRead = async (id) => {
    try {
        const message = await messageModel.findOne({id: id});

        if (!message) throw new Error('Message not found');

        message.read = true;

        await message.save();

        return {
            ...message.toObject(),
            _id: undefined
        }
    } catch (e) {

    }
}

const deleteMessage = async (body) => {
    try {
        const message = await messageModel.findOne({id: body.id});
        if (!message) {
            throw new Error('Message not found');
        }

        await messageModel.deleteOne({id: body.id});

        return {
            id: message.id,
        };
    } catch (e) {
        throw error;
    }
}

module.exports = {
    getMessageList,
    getMessageInfo,
    updateMessageToMarkRead,
    deleteMessage
}