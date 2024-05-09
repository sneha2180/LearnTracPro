const express = require('express');
const router = express.Router();
const Course = require('../../models/course');

router.post('/', async (req, res) => {
    try {
        const { title, description, instructor, duration, category, level, prerequisites, resources,image } = req.body;
        const newCourse = await Course.create({ title, description, instructor, duration, category, level, prerequisites,  resources,image });
        res.status(201).json(newCourse);
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.get('/:courseId', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const course = await Course.findById(courseId).
        populate('chapters')
        .populate('queries');
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        console.error('Error fetching tutor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:courseId', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const { title, description, instructor, duration, category, level, prerequisites, studentsEnrolled, resources } = req.body;
        const updatedCourse = await Course.findByIdAndUpdate(courseId, { title, description, instructor, duration, category, level, prerequisites, studentsEnrolled, resources }, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/:courseId', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const deletedCourse = await Course.findByIdAndDelete(courseId);
        if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
