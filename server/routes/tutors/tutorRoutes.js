const express = require('express');
const router = express.Router();
const Tutor = require('../../models/tutor');

// router.get('/', async (req, res) => {
//     try {
//         const email = "sandraantony2002+2@gmail.com";
//         const tutor = await Tutor.findOne({ email }, '-_id -__v');
//         res.status(200).json(tutor);
//     } catch (error) {
//         console.error('Error fetching tutor:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newTutor = await Tutor.create({ name, email, password });
        res.status(201).json(newTutor);
    } catch (error) {
        console.error('Error creating tutor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password,role } = req.body;
        const tutor = await Tutor.findOne({ email }, '-__v');
        if (!tutor) {
            return res.status(404).json({ message: 'User not found' });
        }
        const passwordMatch = tutor.password==password;
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        res.status(200).json(tutor);
    } catch (error) {
        res.status(500).json(null);
    }
});

module.exports = router;
