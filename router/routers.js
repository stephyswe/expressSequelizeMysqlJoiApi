const express = require('express');
const router = express.Router();

const storiesRouter = require('../router/storiesRouter');
const chaptersRouter = require('../router/chaptersRouter');
const authorsRouter = require('../router/authorsRouter');
const SchemaValidator = require('../middlewares/SchemaValidator');
const validateRequest = SchemaValidator(true);

router.use('/book', storiesRouter)
router.use('/chapter', chaptersRouter)
router.use('/author', authorsRouter)

module.exports = router;