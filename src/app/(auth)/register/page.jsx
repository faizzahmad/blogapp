import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { addUser, handelgithublogin } from "@/lib/action";
import Link from "next/link";


const Register = () =>  {
  return (
    <div className="w-full">
     <div className="flex items-center justify-center my-5">
 <div className="py-5 w-[400px] p-12 bg-gray-800  rounded shadow-sm">
 <h1 className="text-[25px] font-[800]  text-orange-600">Sing-up</h1>
 <h1 className="text-[18px] font-[800] text-white my-2">Register Yourself</h1>
<form action={handelgithublogin}>
<button className="w-full border-[1px] border-gray-700 py-2 my-4 font-semibold text-sm flex items-center gap-2 justify-center rounded ">Git hub <FaGithub/></button>
<p className="my-2 font-semibold text-orange-500 text-xs text-center">OR</p>
</form>
 <form action={addUser}  className="grid grid-cols-1 gap-x-2 gap-y-4 pb-5">
 <div>
  <input type="text" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="User name" name="username" required  />
 </div>

 <div>
  <input type="email" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Your email id" name="email" required />
 </div>


 <div>
  <input type="text" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Password" name="pasword" required />
 </div>

 <div>
  <input type="text" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Profile image url"  name="img" required/>
 </div>


 <div>
  <button type="submit" className="w-full font-semibold text-sm text-gray-50 bg-blue-700 py-2 rounded">Submit</button>
  <p className="mb-0 text-[10px] text-white font-semibold text-center py-2">Already have an account ? <Link href='/login' className="text-blue-600">Log-in</Link></p>
 </div>
 </form>


 </div>

 
      </div>
    </div>
  )
}

export default Register; 