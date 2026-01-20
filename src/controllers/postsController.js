const postModels = require('../models/postModels')

const postsController = {
   // GET /
    index: (req, res) => {
        const posts = postModels.getAllPosts()
        
        res.render('index', { posts })
    },

    //GET/posts/:id
    show: (req, res)=>{
        const id  = req.params.id

        const post = postModels.getPostById(id)

        res.render('post', { post })
    }
} 

module.exports = postsController