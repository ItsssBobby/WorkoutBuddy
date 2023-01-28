const { Post } = require('../models');

const postData = [
    {
        id: 2000,
        userId: 1,
        post: "This posts belongs to user 1",
    }
]

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost;