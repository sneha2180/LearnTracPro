const express = require('express');
const router = express.Router();
const Query = require('../../models/query');
const Course = require('../../models/course');

router.post('/:courseId/query', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const { name, content } = req.body;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const newQuery = await Query.create({ name, content });
        course.queries.push(newQuery._id);
        await course.save();

        res.status(201).json(newQuery);
    } catch (error) {
        console.error('Error creating chapter:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:courseId/query', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const course = await Course.findById(courseId).populate('queries');
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course.queries);
    } catch (error) {
        console.error('Error fetching queries:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/query/:queryId', async (req, res) => {
    try {
        const queryId = req.params.queryId;
        const query = await Query.findById(queryId);
        if (!query) {
            return res.status(404).json({ message: 'Query not found for this course' });
        }
        res.status(200).json(query);
    } catch (error) {
        console.error('Error fetching query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;