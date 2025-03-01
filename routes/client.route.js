const express = require('express')
const router = express.Router()

const clientController = require('../controllers/client.controller')

router.post('/messages', clientController.sendMessage);
router.post('/otp/get', clientController.getVerificationCodeForEmail);
router.post('/otp/verify', clientController.verifyEmail);
router.get('/faqs', clientController.getFAQList);
router.get('/blogs', clientController.getBlogList);
router.get('/blogs/:id', clientController.getBlogById);

module.exports = router;