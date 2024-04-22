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

router.get('/', async (req, res) => {
    try {
        const discussions = await Discussion.find();
        res.status(200).json(discussions);
    } catch (error) {
        console.error('Error fetching discussions:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;