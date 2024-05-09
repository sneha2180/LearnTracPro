const express = require('express');
const router = express.Router();
const Discussion = require('../../models/discussion');

router.post('/',async(req,res)=>{
    try{
        const {title,content,userId,createdAt,updatedAt,comments} = req.body;
        const newDiscussion = await Discussion.create({ title,content,userId,createdAt,updatedAt,comments });
        res.status(201).json(newDiscussion);
    }catch(e){
        console.log(e);
    }
})

router.post('/:id/comments', async (req, res) => {
    try {
        const { userId, content } = req.body;
        const discussion = await Discussion.findById(req.params.id);
        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }
        const newComment = {
            userId,
            content,
            createdAt: new Date().toISOString()
        };
        discussion.comments.push(newComment);
        await discussion.save();

        res.status(201).json({ message: 'Comment added successfully', comment: newComment });
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/', async (req, res) => {
    try {
        const discussions = await Discussion.find();
        res.status(200).json(discussions);
    } catch (error) {
        console.error('Error fetching discussions:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const discussion = await Discussion.findById(req.params.id);
        if (!discussion) {
            return res.status(404).json({ message: 'discussion not found' });
        }
        res.status(200).json(discussion);
    } catch (error) {
        console.error('Error fetching discussion:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports = router;