import { getUser } from "@/lib/data";
import Image from "next/image";
 const Postcard = async({userId,postdate}) =>  {
const userdetail = await getUser(userId);

  return (
    <div className="flex items-center gap-3">
    <div className="w-[50px] h-[50px] relative rounded-full border-[2px] border-purple-500 shadow-white">
    <Image src={userdetail.img ? userdetail.img : '/images/noavatar.png'} fill className="rounded-full" ></Image>
    </div>

    <div>
      <p className=" font-semibold text-xs text-gray-700 ">Author</p>
      <p className=" font-semibold text-xs text-gray-50 mb-0 capitalize">{userdetail.username} <span className="ml-4 text-[8px]">{postdate}</span></p>
      <p></p>
    </div>

   
  </div>
  )
}
export default Postcard;