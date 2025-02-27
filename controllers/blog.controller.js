const Joi = require('joi');
const blogService = require('../services/blog.service');
const { sendResponse } = require('../utils/responseHandler');

const getBlogList = async (req, res) => {
    try {
        console.log("getBlogList");
        const blogListData = await blogService.getBlogList();

        sendResponse(res, 200, 'Blog list fetched successfully', blogListData);
    } catch (error) {
        sendResponse(res, 400, 'Fetching blog list failed', error.message);
    }
}

const getBlogById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('Bad Request');
        const blogData = await blogService.getBlogById(id);

        sendResponse(res, 200, 'Blog info fetched successfully', blogData);
    } catch (error) {
        sendResponse(res, 400, 'Fetching blog info failed', error.message);
    }
}

const createBlog = async (req, res) => {
    try {
        const body = req.body;
        let validator = Joi.object({
            title: Joi.string().required().min(3),
            coverImage: Joi.string().required(),
            content: Joi.string().required().min(3),
        })

        const {error} = validator.validate(body);

        if (error) {
            console.log("ERROR: ", error);
            throw error;
        }

        const blogCreatedData = await blogService.createBlog(body);

        sendResponse(res, 200, 'Blog created successfully', blogCreatedData);
    } catch (error) {
        console.log(error)
        sendResponse(res, 400, error.message, null);
    }
}

const updateBlog = async (req, res) => {
    try {
        const body = req.body;
        let validator = Joi.object({
            id: Joi.string().required(),
            title: Joi.string().required().min(3),
            coverImage: Joi.string().required(),
            content: Joi.string().required().min(3),
        })

        const {error} = validator.validate(body);

        if (error) {
            console.log("ERROR: ", error);
            throw error;
        }

        const blogUpdatedData = await blogService.updateBlog(body);

        sendResponse(res, 200, 'Blog updated successfully', blogUpdatedData);
    } catch (error) {
        console.log(error)
        sendResponse(res, 400, error.message, null);
    }
}

const deleteBlog = async (req, res) => {
    try {
        const body = req.body;

        if (!('id' in body)) throw new Error('Bad Request');
        const blogDeletedData = await blogService.deleteBlog(body);
        sendResponse(res, 200, 'Blog deleted successfully', blogDeletedData);
    } catch (error) {
        console.log(error)
        sendResponse(res, 400, error.message, null);
    }
}

module.exports = { getBlogList, getBlogById, createBlog, updateBlog, deleteBlog };