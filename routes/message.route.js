const express = require('express');
const router = express.Router();

const messageController = require('../controllers/message.controller');

router.get('/', messageController.getMessageList);
router.post('/markread', messageController.updateMessageToMarkRead);
router.post('/delete', messageController.deleteMessage);
router.get('/:id', messageController.getMessageInfo);

module.exports = router;
