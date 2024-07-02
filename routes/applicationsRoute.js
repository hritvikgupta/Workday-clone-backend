const express = require('express');
const {getPersonInfoUser,postPeronalInfoUser, postApplication,  getAllApplications } = require('../controller/crud')
const personalDetailsSchema = require('../models/personalDetailsSchema');

const router = express.Router()


router.get("/", getAllApplications)
// router.post('/',postApplication )

module.exports = router