const express = require('express');
const router = express.Router();
const SubjectController = require('../controllers/subject_controller');

// Define routes
router.get('/', SubjectController.getAllSubject);
router.get('/:id_subject', SubjectController.getSubject);
router.post('/', SubjectController.createSubject);
router.put('/:id', SubjectController.updateSubject);
router.delete('/:id', SubjectController.deleteSubject);

module.exports = router;
