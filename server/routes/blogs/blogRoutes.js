const express = require('express');
const router = express.Router();
const Blog = require('../../models/blog');

router.post('/', async (req, res) => {
    try{
        const {title,content,userId,createdAt,updatedAt} = req.body;
        const newBlog = await Blog.create({title,content,userId,createdAt,updatedAt});
        res.status(201).json(newBlog);
    }catch(e){
        console.error('Error creating student:', error);
        res.status(500).json({ message: 'Internal server error' });

    }
});

router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;