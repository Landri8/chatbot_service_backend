const mongoose = require('mongoose');
const { generateID, getFormattedDateYYYYMMDD } = require('../utils/commonUtil');

const blogSchema = new mongoose.Schema({
    id: {type: String, default: () => generateID('BLG'), unique: true},
    title: {type: String, required: true},
    coverImage: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: String, default: () => getFormattedDateYYYYMMDD()},
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;