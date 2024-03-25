
import Postcard from "@/components/Blog/Postcard";
import { getPost } from "@/lib/data";
import Image from "next/image";

export const generateMetadata = async({params}) => {
  const {slug} = params;
  const postdetail = await getPost(slug);
  return{
    title : postdetail.title,
    description : postdetail.desc
  }
}

const Blogpage = async({params}) => {
const {slug} = params;
const postdetail = await getPost(slug);

return(
  <div className="w-full py-5">
  <div className="w-full grid gap-y-3 grid-cols-1 md:flex md:gap-5">
    <div className=" md:w-4/12">
      <div className="h-[500px] relative w-full">
      {postdetail.img &&   <Image src={postdetail.img} fill ></Image>}
      </div>
    </div>


    <div className="md:w-8/12 px-3">
     <div className="w-full">
     <div className="mb-3">
      <h1 className="text-[40px] text-gray-50 font-[800] mb-0">{postdetail.title}</h1>
      </div>

   <Postcard userId={postdetail.userId} postdate={postdetail.createdAt.toString().slice(0,15)}/>
     </div>


     <div className=" py-5">
     <h5 className="mb-3 text-cyan-400 font-semibold"> Desc </h5>
      <p className=" text-sm font-semibold">{postdetail.fulldec}</p>
     </div>
    </div>
  </div>
</div>
)
}

export default Blogpage