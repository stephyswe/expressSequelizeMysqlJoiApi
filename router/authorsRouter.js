const express = require('express');
const router = express.Router();
const UserController = require('../controller/authorController')

router.get('/allauthor', UserController.getAuthor)
router.route('/admin/create/new').post(UserController.newAuthor) //create new authors
router.route('/admin/update/:id').put(UserController.updateAuthor) //update authors
router.route('/admin/delete/:id').delete(UserController.deleteAuthor) //delete authors

module.exports = router