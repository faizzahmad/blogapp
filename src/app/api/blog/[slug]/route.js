import { Post } from "@/lib/models";
import { conectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async(request,{params}) => {
    const {slug} = params
try{
    conectToDb();
    const post = await Post.findOne({slug});
    return NextResponse.json(post)
 

}catch(err){
console.log(err);
throw new Error("Failed to fetch Posts ")
}
}


export const DELETE = async(request,{params}) => {
    const {slug} = params
try{
    conectToDb();
    const post = await Post.deleteOne({slug});
    return NextResponse.json(post)
 

}catch(err){
console.log(err);
throw new Error("Failed to delete Posts ")
}
}
