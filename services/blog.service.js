const blogModel = require('../models/blog.model');
const cloudinary = require("../config/cloudinary");

const getBlogList = async () => {
    try {
        const blogs = await blogModel.find({}, {_id: 0});

        return blogs;
    } catch (error) {
        throw error;
    };
}

const getBlogById = async (id) => {
    try {
        const blog = await blogModel.findOne({id: id}, {_id: 0});

        return blog;
    } catch (error) {
        throw error;
    };
}

const createBlog = async (body) => {
    try {

        if (body.coverImage && /^data:image\/[a-zA-Z]+;base64,/.test(body.coverImage)) {
            body.coverImage = await uploadImage(body.coverImage);
        }

        const blog = await blogModel.create(body)

        return {
            ...blog.toObject(),
            _id: undefined
        };
    } catch (error) {
        throw error;
    };
}

const updateBlog = async (body) => {
    try {
        const blog = await blogModel.findOne({id: body.id});

        if (!blog) {
            throw new Error('Blog not found');
        }

        if (body.coverImage && /^data:image\/[a-zA-Z]+;base64,/.test(body.coverImage)) {
            blog.coverImage = await uploadImage(body.coverImage);
        }

        blog.title = body.title;
        blog.content = body.content;

        await blog.save();
        return blog
    } catch (error) {
        throw error;
    }
}

const deleteBlog  = async (body) => {
    try {
        const blog = await blogModel.findOne({id: body.id});
        if (!blog) {
            throw new Error('Blog not found');
        }

        await blogModel.deleteOne({id: body.id});

        return {
            id: blog.id,
        };
    } catch (error) {
        throw error;
    }
}

const uploadImage = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file);
        return result.url;
    } catch (error) {
        throw error;
    }
};

module.exports = { getBlogList, getBlogById, createBlog, updateBlog, deleteBlog };