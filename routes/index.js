const express = require('express')
const router = express.Router()
const Controller = require('../controllers/Controller.js')

router.get('/', Controller.getRoot)
router.get('/students', Controller.getStudents)
router.get('/students/add', Controller.addForm)
router.get('/students/:id/delete', Controller.delete)
router.get('/students/:id/edit', Controller.editForm)
router.get('/students/:email', Controller.studentEmail)

router.get('/teachers', Controller.getTeachers)
router.get('/teachers/:id', Controller.teacherId)

router.get('/subjects', Controller.getSubjects)
router.get('/subjects/:id', Controller.subjectId)

router.post('/students/add', Controller.add)
router.post('/students/:id/edit', Controller.edit)

module.exports = router