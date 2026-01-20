const postModels = require("../models/postModels");

const adminController = {
  //GET "/admin"
  index: (req, res) => {
    const posts = postModels.getAllPosts();

    res.render("admin", { posts });
  },

  //get "/admin/create"
  create: (req, res) => {
    res.render("newPostForm");
  },

  //POST /admin/create
  save: (req, res) => {
    const { title, content } = req.body;

    const newPost = postModels.createPost(title, content);
    postModels.savePost(newPost);

    res.redirect("/admin");
  },

  //GET /admin/edit/:id
  edit: (req, res) => {
    const id = req.params.id;

    const post = postModels.getPostById(id);

    res.render("editPostForm", { post });
  },

  //POST /admin/update/:id
   update: (req, res) => {
     const id = req.params.id;

     const { title, content } = req.body;

     postModels.updatePost(id, { title, content });

     res.redirect("/admin");
   },

//   //POST /admin/delete/:id
   delete: (req, res) => {
     const id = req.params.id;

     postModels.deletePost(id);

     res.redirect("/admin");
   },
 };

module.exports = adminController;
