import { Post } from "@/lib/models";
import { conectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async(req,res) => {
try{
    conectToDb();
    const post = await Post.find();
    return NextResponse.json(post)

}catch(err){
console.log(err);
throw new Error("Failed to fetch Posts ")
}
}