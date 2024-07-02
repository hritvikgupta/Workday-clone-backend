const express = require('express')
const router = express.Router()
const {getUser, postUser, loginUser} = require('../controller/crud')

router.route('/:id').get(getUser)
router.route('/signup').post(postUser)
router.route('/login').post(loginUser)

module.exports = router;