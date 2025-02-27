const { v4: uuidv4 } = require('uuid');

const getFormattedDateYYYYMMDD = () => {
    const now = new Date();
    return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
};

const getFormattedDateTime = () => {
    const now = new Date();
    return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
};

const generateID = (prefix) => {
    return `${prefix}${uuidv4().replace(/-/g, '').slice(0, 16)}`;
}

module.exports = { getFormattedDateYYYYMMDD, generateID, getFormattedDateTime };