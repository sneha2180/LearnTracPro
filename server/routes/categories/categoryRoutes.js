const express = require('express');
const router = express.Router();
const Category = require('../../models/category');

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const category = await Category.create({ name });
        res.status(201).json(category);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error getting categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
