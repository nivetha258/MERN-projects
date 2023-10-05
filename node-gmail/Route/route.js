const express = require('express');
const router = express.Router();




const OTPRoutes = require('../emailOTP');


router.post("/generateOTP",OTPRoutes.sendOTP)

module.exports = router;