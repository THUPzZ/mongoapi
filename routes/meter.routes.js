const express = require('express');
const router = express.Router();
var Data = require('../controllers/Data.controller')

router.get('/api/tolist',  Data.tolist)
router.get('/api/type',  Data.type)
router.get('/api/unit',  Data.unit)
router.get('/api/approve_sec_user',  Data.approve_sec_user)
router.get('/api/approve_user',  Data.approve_user)
router.get('/',  Data.index)

router.get('/api/insertMedicalsupplies/:value',  Data.insertMedicalsupplies)
router.get('/api/insertnonMedicalSupplies/:value',  Data.insertnonMedicalSupplies)
router.get('/api/insertHousework/:value',  Data.insertHousework)
router.get('/api/insertOfficeMaterial/:value',  Data.insertOfficeMaterial)
router.get('/api/insertComputerMaterial/:value',  Data.insertComputerMaterial)
router.get('/api/insertDisinfectantWater/:value',  Data.insertDisinfectantWater)
router.get('/api/insertPrintedForm/:value',  Data.insertPrintedForm)
router.get('/api/insertSaline/:value',  Data.insertSaline)

module.exports = router;