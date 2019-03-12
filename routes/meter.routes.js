const express = require('express');
const router = express.Router();
var Data = require('../controllers/Data.controller')

router.get('/api/tolist',  Data.tolist)
router.get('/',  Data.index)


module.exports = router;