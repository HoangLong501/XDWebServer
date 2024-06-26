const express = require('express');
const router = express.Router();
const SinhVienController = require('../controllers/sinhvien_controller');

// Define routes
router.get('/', SinhVienController.getAllSV);
router.get('/subject/:id_subject', SinhVienController.getSV);
router.post('/', SinhVienController.createSV);
router.post('/update/:mssv', SinhVienController.updateSV);
router.post('/delete/:mssv', SinhVienController.deleteSV);

module.exports = router;
