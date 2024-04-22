const express = require('express');
const router = express.Router();
const Tutor = require('../../models/tutor');

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newTutor = await Tutor.create({ name, email, password });
        res.status(201).json(newTutor);
    } catch (error) {
        console.error('Error creating tutor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const email = "sandraantony2002+2@gmail.com";
        const tutor = await Tutor.findOne({ email }, '-_id -__v');
        res.status(200).json(tutor);
    } catch (error) {
        console.error('Error fetching tutor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
