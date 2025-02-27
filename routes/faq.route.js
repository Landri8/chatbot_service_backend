const express = require('express')

const router = express.Router();
const faqController = require('../controllers/faq.controller');

router.get('/', faqController.getFAQList);
router.post('/create', faqController.createFAQ);
router.post('/update', faqController.updateFAQ);
router.post('/delete', faqController.deleteFAQ);
router.get('/:id', faqController.getFAQInfo);

module.exports = router;