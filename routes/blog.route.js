const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog.controller');

router.get('/', blogController.getBlogList);
router.post('/create', blogController.createBlog);
router.post('/update', blogController.updateBlog);
router.post('/delete', blogController.deleteBlog);
router.get('/:id', blogController.getBlogById);

module.exports = router;