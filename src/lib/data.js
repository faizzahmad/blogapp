import { Post, User } from "./models";
import { conectToDb } from "./utils";
import mongoose from "mongoose";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async() => {
try{
conectToDb()
const posts = await Post.find();
return posts
}catch(err){
    console.log(err);
    throw new Error("Failed to fetch posts")
}
}

export const getPost = async(slug) => {
    try{
    conectToDb()
    const post = await Post.findOne({slug : slug});
    return post
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch post")
    }
    }

    export const getUser = async(id) => {
        noStore()
        try{
        conectToDb()
        const user = await User.findById(id);
        return user
        }catch(err){
            console.log(err);
            throw new Error("Failed to fetch user")
    }
}

export const getUsers = async() => {
    try{
    conectToDb()
    const users = await User.find();
    return users
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch users")
}
}