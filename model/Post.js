import mongoose from "mongoose";
const {Schema, model} = mongoose;

const postSchema = new Schema({
    title: String,
    content: String
});

const Post = model('Post', postSchema);
export default Post;
