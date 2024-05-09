const express = require('express');
const router = express.Router();
const Chapter = require('../../models/chapter')
const Course = require('../../models/course');

router.post('/:courseId/chapter', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const { title, content,video } = req.body;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const newChapter = await Chapter.create({ title, content,video });
        course.chapters.push(newChapter._id);
        await course.save();

        res.status(201).json(newChapter);
    } catch (error) {
        console.error('Error creating chapter:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:chapterId', async (req, res) => {
    try {
        const chapterId = req.params.chapterId;
        const chapter = await Chapter.findById(chapterId);
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }
        res.status(200).json(chapter);
    } catch (error) {
        console.error('Error fetching chapter:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:courseId/chapter/:chapterId', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const chapterId = req.params.chapterId;
        const { title, content } = req.body;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        let chapter = await Chapter.findById(chapterId);
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }
        chapter.title = title;
        chapter.content = content;
        await chapter.save();

        res.status(200).json(chapter);
    } catch (error) {
        console.error('Error updating chapter:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/:courseId/chapter/:chapterId', async (req, res) => {
    try {
        const { courseId, chapterId } = req.params;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const chapter = await Chapter.findById(chapterId);
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }
        course.chapters.pull(chapterId);
        await course.save();
        await Chapter.findByIdAndDelete(chapterId);

        res.status(200).json({ message: 'Chapter deleted successfully' });
    } catch (error) {
        console.error('Error deleting chapter:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;