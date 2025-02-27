const express = require('express')
const router = express.Router()

const clientController = require('../controllers/client.controller')

router.post('/messages', clientController.sendMessage);

module.exports = router;