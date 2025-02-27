const mongoose = require('mongoose');
const { generateID, getFormattedDateYYYYMMDD } = require('../utils/commonUtil');

const userSchema = new mongoose.Schema({
    id: {type: String, default: () => generateID('USR'), unique: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    createdAt: {type: String, default: () => getFormattedDateYYYYMMDD()},
});

const User = mongoose.model('User', userSchema);

module.exports = User;