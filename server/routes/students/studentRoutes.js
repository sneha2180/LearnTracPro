const express = require('express');
const router = express.Router();
const Student = require('../../models/student');

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newStudent = await Student.create({ name, email, password });
        res.status(201).json(newStudent);
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const email = JSON.parse(localStorage.getItem('user'));
        const student = await Student.findOne({ email }, '-_id -__v');
        
        res.status(200).json(student);
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password,role } = req.body;
        const student = await Student.findOne({ email }, '-__v');
        if (!student) {
            return res.status(404).json({ message: 'User not found' });
        }
        const passwordMatch = student.password==password;
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(null);
    }
});

router.post('/enroll', async (req, res) => {
    try {
        const { studentId, courseId } = req.body;
        const student = await Student.findById(studentId);
        console.log(student);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        student.enrolledCourses.push(courseId);
        await student.save();

        res.status(200).json(student);
    } catch (error) {
        console.error('Error enrolling student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports = router;
