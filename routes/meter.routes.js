const express = require('express');
const router = express.Router();
var get = require('../controllers/get.controller')
var medical = require('../controllers/medical.controller')
var nonMedical = require('../controllers/nonmedical.controller')
var houseWork = require('../controllers/houseWork.controller')
var officeMeterial = require('../controllers/officeMeterial.controller')
var computerMaterial = require('../controllers/computerMaterial.controller')
var disinfectantWater = require('../controllers/disinfectantWater.controller')
var printedForm = require('../controllers/printedForm.controller')
var saline = require('../controllers/saline.controller')

//medical
router.get('/api/medicalsupplies',  medical.getMedical)
router.post('/api/insertMedicalsupplies',  medical.postMedical)
router.delete('/api/deleteMedicalsupplies',  medical.delMedical)
//non-medical
router.get('/api/nonMedicalSupplies',  nonMedical.getNonMedical)
router.post('/api/insertnonMedicalSupplies',  nonMedical.postNonMedical)
router.delete('/api/deletenonMedicalSupplies',  nonMedical.delNonMedical)
//house
router.get('/api/Housework',  houseWork.getHouse)
router.post('/api/insertHousework',  houseWork.postHouse)
router.delete('/api/deleteHousework',  houseWork.delHouse)
//officeMeterial
router.get('/api/OfficeMaterial',  officeMeterial.getOfficeMaterial)
router.post('/api/insertOfficeMaterial',  officeMeterial.postOfficeMaterial)
router.delete('/api/deleteOfficeMaterial',  officeMeterial.delOfficeMaterial)
//computerMaterial
router.get('/api/ComputerMaterial',  computerMaterial.getComputerMaterial)
router.post('/api/insertComputerMaterial',  computerMaterial.postComputerMaterial)
router.delete('/api/deleteComputerMaterial',  computerMaterial.delComputerMaterial)
//disinfectantWater
router.get('/api/DisinfectantWater',  disinfectantWater.getDisinfectantWater)
router.post('/api/insertDisinfectantWater',  disinfectantWater.postDisinfectantWater)
router.delete('/api/deleteDisinfectantWater',  disinfectantWater.delDisinfectantWater)
//printedForm
router.get('/api/PrintedForm',  printedForm.getPrintedForm)
router.post('/api/insertPrintedForm',  printedForm.postPrintedForm)
router.delete('/api/deletePrintedForm',  printedForm.delPrintedForm)
//saline
router.get('/api/Saline',  saline.getSaline)
router.post('/api/insertSaline',  saline.postSaline)
router.delete('/api/deleteSaline',  saline.delSaline)


router.get('/api/tolist',  get.tolist)
router.get('/api/type',  get.type)
router.get('/api/unit',  get.unit)
router.get('/api/approve_sec_user',  get.approve_sec_user)
router.get('/api/approve_user',  get.approve_user)
router.get('/',  get.index)

module.exports = router;