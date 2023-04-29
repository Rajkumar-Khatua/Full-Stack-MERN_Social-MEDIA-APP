const router = require("express").Router();
const User = require("../Models/User")
const bcrypt = require("bcrypt");

// UPDATE USER
router.put("/:id", async (req, res) => {
   // check user is existing ? in our DB
   if (req.body.userId === req.params.id || req.body.isAdmin) {
      // after authentication generate new Hashed password and update.
      if (req.body.password) {
         try {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
         } catch (err) {
            return res.status(500).json(err)
         }
      }

      // now Do the update operation...
      try {
         const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
         });
         res.status(200).json("account updated");
      } catch (err) {
         return res.status(500).json(err);
      }
   } else {
      return res.status(401).json("You are not authorized to perform this action.")
   }
})


// DELETE USER
router.delete("/:id", async (req, res) => {
   // check user is existing ? in our DB
   if (req.body.userId === req.params.id || req.body.isAdmin) {

      // now Do the delete operation...
      try {
         await User.findByIdAndDelete(req.params.id);
         res.status(200).json("account has been deleted");
      } catch (err) {
         return res.status(500).json(err);
      }
   } else {
      return res.status(401).json("You are not authorized to perform this action.")
   }
})
// GET A USER
router.get("/:id", async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      // filter the unessery user information or private information password 
      // this doc is carred all the user information
      const { password, updatedAt, ...other } = user._doc
      // if user is found, return the user.
      res.status(200).json(other);
   } catch (error) {
      res.status(500).json(error)
   }
})


// FOLLOW USER

router.put("/:id/follow", async (req, res) => {
   // check user is existing? in our DB   
   if (req.body.userId !== req.params.id) {
      try {
         // this is a user which wants to follow
         const user = await User.findById(req.params.id);

         // this is a user who wants to follow 
         const currentUser = await User.findById(req.body.userId);

         // check if user is already following and followers ? 
         if (!user.followers.includes(req.body.userId)) {

            // update user Array folowers
            await user.updateOne({ $push: { followers: req.body.userId } });

            // update user Array folowings
            await currentUser.updateOne({ $push: { followings: req.params.id } });

            // after send the response 
            res.status(200).json("user has been followed")
         } else {
            res.status(403).json("You already have follow")
         }
      } catch (error) {
         res.status(500).json(error)
      }
   }
   else {
      res.status(403).json("You can't follow Yourself")
   }
})

// UNFOLLOW USER

router.put("/:id/unfollow", async (req, res) => {
   // check user is existing? in our DB   
   if (req.body.userId !== req.params.id) {
      try {
         // this is a user which wants to follow
         const user = await User.findById(req.params.id);

         // this is a user who wants to follow 
         const currentUser = await User.findById(req.body.userId);

         // check if user is already following and followers ? 
         if (user.followers.includes(req.body.userId)) {

            // update user Array folowers
            await user.updateOne({ $pull: { followers: req.body.userId } });

            // update user Array folowings
            await currentUser.updateOne({ $pull: { followings: req.params.id } });

            // after send the response 
            res.status(200).json("user has been unfollowed")
         } else {
            res.status(403).json("You dont follow this user")
         }
      } catch (error) {
         res.status(500).json(error)
      }
   }
   else {
      res.status(403).json("You can't unfollow Yourself")
   }
})
module.exports = router