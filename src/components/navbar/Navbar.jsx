import Link from "next/link";
import Links from "./links/Links";
import { auth } from "@/lib/auth";


const Navbar = async() => {
  const session = await auth()
  
  return (
  <div className="h-[70px] flex items-center">
    <div className="md:w-3/12 w-8/12">
   <Link href={'/'}> <h4 className=" text-[30px] font-[800]">The dev</h4></Link>
    </div>
    <div className="ms-auto md:w-9/12 w-3/12 flex">
<Links session={session}/>
    </div>
  </div>
  )
}

export default Navbar