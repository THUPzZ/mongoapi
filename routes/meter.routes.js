const express = require('express');
const router = express.Router();
var Data = require('../controllers/Data.controller')

router.get('/api/tolist',  Data.tolist)
router.get('/api/type',  Data.type)
router.get('/api/unit',  Data.unit)
router.get('/api/approve_sec_user',  Data.approve_sec_user)
router.get('/api/approve_user',  Data.approve_user)
router.get('/',  Data.index)


module.exports = router;