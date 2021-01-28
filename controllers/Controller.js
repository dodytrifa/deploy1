
const { Student, Teacher, Subject } = require('../models/index.js')


class Controller {
    static getRoot(req, res) {
        res.send("Profil Sekolah")
    }

    static getStudents(req, res) {
        Student
            .findAll()
            .then(data => {
                res.render('../views/students.ejs', { data });
            })
            .catch(error => {
                res.send(error);
            })
    }

    static studentEmail(req, res) {
        const { email } = req.params
        Student
            .findAll({
                where: { email: email },
            })
            .then(data => {
                res.render('../views/students.ejs', { data });
            })
            .catch(error => {
                res.send(error);
            })
    }

    static addForm(req, res) {
        res.render('./addForm.ejs')
    }

    static editForm(req, res) {
        const { id } = req.params
        Student
            .findAll({
                where: { id: id },
            })
            .then(result => {
                res.render('./editForm.ejs', { result });
            })
            .catch(error => {
                res.send(error);
            })
    }

    static edit(req, res) {
        const { first_name, last_name, email, gender, birth_date } = req.body;
        // console.log(req.body.id);
        let id = req.body.id
        const newStudent = {
            first_name,
            last_name,
            email,
            gender,
            birth_date
        };
        Student.update(newStudent, { where: { id: id } })
            .then(data => {
                res.redirect('/students')
            })
            .catch(error => {
                res.send(error);
            })
    }

    static add(req, res) {
        const { first_name, last_name, email, gender, birth_date } = req.body;
        // let id = req.body.id
        const newStudent = {
            first_name,
            last_name,
            email,
            gender,
            birth_date
        };
        Student.create(newStudent)
            .then(data => {
                // console.log(data);
                res.redirect('/students');
            })
            .catch(error => {
                res.send(error);
            })
    }

    static delete(req, res) {
        const { id } = req.params
        Student
            .destroy({
                where: { id: id }
            })
            .then(data => {
                res.redirect('/students');
            })
            .catch(error => {
                res.send(error);
            })
    }

    static getTeachers(req, res) {
        Teacher
            .findAll()
            .then(data => {
                res.render('../views/teachers.ejs', { data });
            })
            .catch(error => {
                res.send(error);
            })
    }
    static teacherId(req, res) {
        const { id } = req.params
        Teacher
            .findAll({
                where: { id: id },
            })
            .then(data => {
                res.render('../views/teachers.ejs', { data });
            })
            .catch(error => {
                res.send(error);
            })
    }

    static subjectId(req, res) {
        const { id } = req.params
        Subject
            .findAll({
                where: { id: id },
            })
            .then(data => {
                res.render('../views/subjects.ejs', { data });
            })
            .catch(error => {
                res.send(error);
            })
    }

    static getSubjects(req, res) {
        Subject
            .findAll()
            .then(data => {
                res.render('../views/subjects.ejs', { data });
            })
            .catch(error => {
                res.send(error);
            })
    }
}

module.exports = Controller;