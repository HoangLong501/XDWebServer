const express = require('express');
const router = express.Router();
const multer = require('multer');
const FileController = require('../controllers/file_controller');
const upload = multer();

// Define routes
router.post('/', upload.single('file') ,  FileController.uploadFile);


module.exports = router;
