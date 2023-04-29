const router = require("express").Router();
const Post = require("../Models/Post");
const User = require("../Models/User");

// CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
}
)
// UPDATE POST
router.put("/:id", async (req, res) => {
    // find the post 
    try {
        const post = await Post.findById(req.params.id);
        // check owner of the post...
        if (post.userId === req.body.userId) {
            // update the post if the user is the owner of the post
            await post.updateOne({ $set: req.body });
            res.status(200).json("Post updated successfully")
        } else {
            // if user not found,
            res.status(403).json({ message: "You are not the owner of this post you can't access" })
        }
        // if post is not found
    } catch (error) {
        res.status(500).json({ message: "According to your query post is not found" })
    }

})
// DELETE POST
router.delete("/:id", async (req, res) => {
    // find the post 
    try {
        const post = await Post.findById(req.params.id);
        // check owner of the post...
        if (post.userId === req.body.userId) {
            // delete the post if the user is the owner of the post
            await post.deleteOne({ $set: req.body });
            res.status(200).json("Post deleted successfully")
        } else {
            // if user not found,
            res.status(403).json({ message: "You are not the owner of this post you can't access or you can't do this operation" })
        }
        // if post is not found
    } catch (error) {
        res.status(500).json({ message: "According to your query post is not found" })
    }

})
// LIKE POST / DIS LIKE POST 
router.put("/:id/like", async (req, res) => {
    try {
        // find the post 
        const post = await Post.findById(req.params.id);
        // find the post is already linked or not linked in the like array
        // check if the postId with userId if not just push the like in like array
        if (!post.likes.includes(req.body.userId)) {
            // add the user to the like array   
            await Post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("Post liked successfully")
        } else {
            // if user is already liked, then pull the like form  the like array
            await Post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("Post unliked successfully")
        }
    } catch (error) {
        res.status(500).json(error)
    }

})
//COMMENT [** NEED TO MODIFY LITTLE BIT LATTER ON]
router.put("/:id/comment", async (req, res) => {
    try {
        // find the post 
        const post = await Post.findById(req.params.id);
        // find the post is already linked or not linked in the like array
        // check if the postId with userId if not just push the like in like array
        if (!post.comments.includes(req.body.userId)) {
            // add the user to the like array   
            await Post.updateOne({ $push: { comments: req.body.userId } });
            res.status(200).json("Post comment successfully")
        } else {
            // if user is already liked, then pull the like form  the like array
            await Post.updateOne({ $pull: { comments: req.body.userId } });
            res.status(200).json("Post uncimment successfully")
        }
    } catch (error) {
        res.status(500).json(error)
    }

})
// GET A POST
router.get("/:id", async (req, res) => {
    // find the post 
    try {
        // find a single post
        const post = await Post.findById(req.params.id);
        // after find post return response
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error + "something went wrong");
    }

})
// GET TIMELINE POST

router.get('/timeline/:userId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendsPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
               return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPosts.concat(...friendsPosts))
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
