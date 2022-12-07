const express = require('express');
const router = express.Router();
const UserController = require('../controller/storiesController')

router.get('/stories', UserController.getStories)
router.post('/admin/stories/new', UserController.newStories) //create new Stories
router.put('/admin/stories/:id', UserController.updateStories) //update Stories
router.delete('/admin/stories/:id', UserController.deleteStories) //delete Stories

module.exports = router