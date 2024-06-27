const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    tags: String,
    title: {
        type: String,
        required: true
    },
    text: String,
    image: {
        data: Buffer,
        contentType: String
    },
    firm: String,
    likes: Number,
}, {collection: "posts"});

module.exports = mongoose.model('posts', postSchema);