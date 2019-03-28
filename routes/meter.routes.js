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
router.get('/api/medicalsupplies', get.auth , medical.getMedical)
router.post('/api/insertMedicalsupplies', get.auth , medical.postMedical)
router.delete('/api/deleteMedicalsupplies', get.auth , medical.delMedical)
//non-medical
router.get('/api/nonMedicalSupplies', get.auth , nonMedical.getNonMedical)
router.post('/api/insertnonMedicalSupplies', get.auth , nonMedical.postNonMedical)
router.delete('/api/deletenonMedicalSupplies', get.auth , nonMedical.delNonMedical)
//house
router.get('/api/Housework', get.auth , houseWork.getHouse)
router.post('/api/insertHousework', get.auth , houseWork.postHouse)
router.delete('/api/deleteHousework', get.auth , houseWork.delHouse)
//officeMeterial
router.get('/api/OfficeMaterial', get.auth , officeMeterial.getOfficeMaterial)
router.post('/api/insertOfficeMaterial',  get.auth ,officeMeterial.postOfficeMaterial)
router.delete('/api/deleteOfficeMaterial',  get.auth ,officeMeterial.delOfficeMaterial)
//computerMaterial
router.get('/api/ComputerMaterial',  get.auth ,computerMaterial.getComputerMaterial)
router.post('/api/insertComputerMaterial',  get.auth ,computerMaterial.postComputerMaterial)
router.delete('/api/deleteComputerMaterial',  get.auth ,computerMaterial.delComputerMaterial)
//disinfectantWater
router.get('/api/DisinfectantWater',  get.auth ,disinfectantWater.getDisinfectantWater)
router.post('/api/insertDisinfectantWater',  get.auth ,disinfectantWater.postDisinfectantWater)
router.delete('/api/deleteDisinfectantWater',  get.auth ,disinfectantWater.delDisinfectantWater)
//printedForm
router.get('/api/PrintedForm',  get.auth ,printedForm.getPrintedForm)
router.post('/api/insertPrintedForm',  get.auth ,printedForm.postPrintedForm)
router.delete('/api/deletePrintedForm',  get.auth ,printedForm.delPrintedForm)
//saline
router.get('/api/Saline',  get.auth ,saline.getSaline)
router.post('/api/insertSaline',  get.auth ,saline.postSaline)
router.delete('/api/deleteSaline',  get.auth ,saline.delSaline)


router.get('/api/tolist', get.auth ,  get.tolist)
router.get('/api/type',  get.auth ,get.type)
router.get('/api/unit',  get.auth ,get.unit)
router.get('/api/approve_sec_user',  get.auth ,get.approve_sec_user)
router.get('/api/approve_user',  get.auth ,get.approve_user)
router.get('/',  get.auth ,get.index)

module.exports = router;