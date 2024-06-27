const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { postSchema } = require('../models/posts');
const Post = mongoose.model('posts', postSchema);

router.get('/all', async (req, res) => {
    try {
        const posts = await Post.find({});

        if(!posts) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500),json({ error: 'Server error' });
    }
});

router.get('/show/:post')