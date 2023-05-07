const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 20,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 200,
    },
    city: {
        type: String,
        default: "",
    },
    from: {
        type: String,
        default: "",
    },
    reslationship: {
        type: Number,
        enum: [1, 2, 3],
    }
},
    { timestamps: true }
);
//export default class
module.exports = mongoose.model('User', userSchema);