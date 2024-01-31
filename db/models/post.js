const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  prompt: {
    type: String,
    trim: true,
    required: true,
  },
  location: {
    type: String,
  },
  likes: [
    {
      type: Number,
      default: 0,
    },
  ],
  photo: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
