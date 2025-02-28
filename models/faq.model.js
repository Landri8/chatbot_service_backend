const mongoose = require('mongoose');
const { generateID, getCurrentFormattedDate } = require('../utils/commonUtil');

const faqSchema = new mongoose.Schema({
    id: {type: String, default: () => generateID('FAQ'), unique: true},
    question: {type: String, required: true},
    answer: {type: String, required: true},
    createdAt:{type: String, default: () => getCurrentFormattedDate()},
});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;