import { addPost, deletePost } from "@/lib/action"


const Serveraction = () => {
  return (
    <div>

    <div className="grid grid-cols-2 gap-[100px]">
    <form action={addPost} className="grid grid-cols-1 gap-3 py-5">
 <div>
  <input type="text" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Blog title" name="title" required  />
 </div>

 <div>
  <input type="text" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Blog Description" name="desc" required />
 </div>


 <div>
  <input type="text" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Blog slug" name="slug" required />
 </div>

 <div>
  <input type="text" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="User id"  name="userId" required/>
 </div>

 <div>
  <input type="text" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Image Link"  name="img" required />
 </div>

 <div>
  <textarea className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Blog informations" rows={6} name="fulldec" required ></textarea>
 </div>

 <div>
  <button type="submit" className="w-full font-semibold text-sm text-gray-50 bg-blue-700 py-3 rounded">Submit</button>
 </div>
 </form>


 <form action={deletePost} className="grid grid-cols-1 gap-3 py-5">
 <div>
  <input type="text" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Blog id" name="id" required  />
 </div>

 

 <div>
  <button type="submit" className="w-full font-semibold text-sm text-gray-50 bg-blue-700 py-3 rounded">Delete</button>
 </div>
 </form>
 </div>
    </div>
  )
}

export default Serveraction