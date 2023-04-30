const router = require("express").Router();
const User = require("../Models/User")
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {

   try {
      // generate new random password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // create new user
      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: hashedPassword,
      });

      // save new user and response
      const user = await newUser.save();
      res.status(200).json(user);
   } catch (err) {
      res.status(500).json("error", err)
   }
})

// LOGIN user
router.post("/login", async (req, res) => {
   try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found")

      const validPassword = await bcrypt.compare(req.body.password, user.password);
      !validPassword && res.status(404).json("password incorrect")

      res.status(200).json(user)
   } catch (err) {
      res.status(500).json( err)
   }
})

// #complete

module.exports = router