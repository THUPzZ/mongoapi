const express = require('express');
const router = express.Router();
var get = require('../controllers/get.controller')
var insert = require('../controllers/insert.controller')
var del = require('../controllers/delete.controller')
//var insert = require('../controllers/insert.controller')

//get
router.get('/api/tolist',  get.tolist)
router.get('/api/type',  get.type)
router.get('/api/unit',  get.unit)
router.get('/api/approve_sec_user',  get.approve_sec_user)
router.get('/api/approve_user',  get.approve_user)
router.get('/',  get.index)

router.get('/api/medicalsupplies',  get.medicalsupplies)
router.get('/api/nonMedicalSupplies',  get.nonMedicalSupplies)
router.get('/api/Housework',  get.Housework)
router.get('/api/OfficeMaterial',  get.OfficeMaterial)
router.get('/api/ComputerMaterial',  get.ComputerMaterial)
router.get('/api/DisinfectantWater',  get.DisinfectantWater)
router.get('/api/PrintedForm',  get.PrintedForm)
router.get('/api/Saline',  get.Saline)


//insert00
router.post('/api/insertMedicalsupplies',  insert.medicalsupplies)
router.post('/api/insertnonMedicalSupplies',  insert.nonMedicalSupplies)
router.post('/api/insertHousework',  insert.Housework)
router.post('/api/insertOfficeMaterial',  insert.OfficeMaterial)
router.post('/api/insertComputerMaterial',  insert.ComputerMaterial)
router.post('/api/insertDisinfectantWater',  insert.DisinfectantWater)
router.post('/api/insertPrintedForm',  insert.PrintedForm)
router.post('/api/insertSaline',  insert.Saline)

//delete
router.delete('/api/deleteMedicalsupplies',  del.medicalsupplies)
router.delete('/api/deletenonMedicalSupplies',  del.nonMedicalSupplies)
router.delete('/api/deleteHousework',  del.Housework)
router.delete('/api/deleteOfficeMaterial',  del.OfficeMaterial)
router.delete('/api/deleteComputerMaterial',  del.ComputerMaterial)
router.delete('/api/deleteDisinfectantWater',  del.DisinfectantWater)
router.delete('/api/deletePrintedForm',  del.PrintedForm)
router.delete('/api/deleteSaline',  del.Saline)

module.exports = router;