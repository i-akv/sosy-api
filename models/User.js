import { Schema, Model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "username is mandatory"]
    
  },
}, {timestamps: true});

// User
// - username
// - email
// - password
// - fullname
// - phone
// - profile picture
// - date of birth
// - address
// - bio
// - following
// - followers
// - posts
// - likedPosts
// - bookmarked
// - isVerified
// - otherSocials
