const express = require('express');
const router = express.Router();
const UserController = require('../controller/chapterController')

router.get('/allchapters', UserController.getChapters)
router.route('/admin/create/new').post(UserController.newChapters) //create new chapters
router.route('/admin/update/:id').put(UserController.updateChapters) //update chapters
router.route('/admin/delete/:id').delete(UserController.deleteChapters) //delete chapters

module.exports = router