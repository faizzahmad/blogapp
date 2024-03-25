"use server"
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { conectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (formData) => {
    const { title, slug, desc, userId, img, fulldec } = Object.fromEntries(formData);
    try {
        conectToDb()
        const newPost = new Post({
            title,
            slug,
            desc,
            fulldec,
            userId,
            img
        })

        await newPost.save();
        revalidatePath('/blog')
        console.log("save to db")
    } catch (err) {
        console.log(err)
        return { error: 'Something went wrong' }
    }
}


export const deletePost = async (formData) => {
   
    const { id } = Object.fromEntries(formData);
    try {
        conectToDb()

        await Post.findByIdAndDelete(id);
        revalidatePath('/blog')
        console.log("Deleted form db")
    } catch (err) {
        console.log(err)
        return { error: 'Something went wrong' }
    }
}


export const handelgithublogin = async (e) => {

    await signIn("github")
}

export const handelgithublogout = async (e) => {
    await signOut()
}


export const addUser = async (formData) => {
    const { username, pasword, img, email} = Object.fromEntries(formData);

try {
    conectToDb()
    const user = User.findOne({username})
 if(user){
    return"user alredy exists"
      console.log("user already exists")
 }
  
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(pasword,salt)
    const newUser = new User({
       username,
       pasword : hashedpassword,
       img,
       email
    })

    await newUser.save();
    console.log("Register successfully")
} catch (err) {
    console.log(err)
    return { error: 'Something went wrong' }
}
}



export const logIn = async (formData) => {
    const {pasword,email} = Object.fromEntries(formData);

try {
   await signIn("credentials",{email,pasword})
} catch (err) {
    console.log(err)
    return { error: 'Something went wrong' }
}
}