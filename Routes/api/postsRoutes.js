const express = require("express");
const router = express.Router();

// Posts model
const PostsModel = require("../../models/PostsModel");

// get all docs ...

router.get("/", async (req, res) => {
  try {
    const posts = await PostsModel.find();
    res.send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  const { title, body } = req.body;
  console.log(req.body);
  try {
    const newPost = await PostsModel.create({ title, body });
    if (!newPost)
      throw Error("there is somme error while saving the post ... ");
    res.status(200).json(newPost);
  } catch {
    console.log("error while saving post in db ");
  }

  //
});

// get one doc with the id ...
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostsModel.findById(id);
    res.send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

// delete one doc with the id ...
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostsModel.findByIdAndDelete(id);

    res.json("post deleted !!");
  } catch (err) {
    res.status(500).send(err);
  }
});

// update one doc with the id ...
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const post = await PostsModel.findByIdAndUpdate(id, { title, body });

    res.send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
