import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
   userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    
     likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],

    },
    picturePath: String,
    userPicturePath: String,
    description : String,






},
{ timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;


 
