"use client";
import { handelgithublogin, handelgithublogout } from "@/lib/action";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";


export default function Links({session}) {
const [open,setopen] = useState(false)
const pathname = usePathname();

    const links = [
        {
            title : 'Homepage',
            path : '/',
        },
        {
            title : 'About',
            path : '/aboutus'
        },
        {
            title : 'Contact',
            path : '/contact'
        },
        {
            title : 'Blog',
            path : '/blog'
        },
        {
            title : 'Register',
            path : '/register'
        }
    ]


    // const session = true;
    const isAdmin = true;
  return (
  <>
      <div className="ms-auto hidden md:block">
        {
            links.map((items,index) => (
                <Link href={items.path} key={index} className={` transition-all duration-100 py-2 px-4 capitalize text-sm font-semibold ${pathname == items.path && 'bg-gray-50 text-gray-900 rounded-[20px]'}`}>{items.title}</Link>
            ))
        }
            
     {
        session?.user ? (
            <>
                {isAdmin && <Link href='/admin'  className={` transition-all duration-100 py-2 px-4 capitalize text-sm font-semibold ${pathname == '/admin' && 'bg-gray-50 text-gray-900 rounded-[20px]'}`}>Admin</Link>}
               <form action={handelgithublogout} className=" inline-block">
               <button className=" bg-gray-50 text-gray-900 font-semibold ml-3 py-2 px-3 rounded shadow-sm text-sm">Log-out</button>
               </form>
            </>
        ) : (
           <form action={handelgithublogin} className="inline-block">
           <button className=" bg-gray-50 text-gray-900 font-semibold ml-3 py-2 px-3 rounded shadow-sm text-sm">Log-in</button>
           </form>
        )
     }
    </div>

  <div className="ms-auto md:hidden">
<div>
<button className=" cursor-pointer" onClick={() => setopen(!open)}> <FaBars size={25}/></button>
</div>

<div className={`fixed top-[70px] z-20 right-0 items-center justify-center  h-[100vh]  bg-gray-900 shadow flex flex-col transition-all duration-100 ${open ? ' block w-[60%]' : 'w-[0px] hidden'}`}>
{
            links.map((items,index) => (
                <Link href={items.path} key={index} className={` transition-all duration-100 py-2 px-4 capitalize text-sm font-semibold ${pathname == items.path && 'bg-gray-50 text-gray-900 rounded-[20px]'}`} onClick={() => setopen(false)}>{items.title}</Link>
            ))
        }
            
     {
        session ? (
            <>
                {session.user?.isAdmin && <Link href='/admin'  className={` transition-all duration-100 py-2 px-4 capitalize text-sm font-semibold ${pathname == '/admin' && 'bg-gray-50 text-gray-900 rounded-[20px]'}`}>Admin</Link>}
                <button className=" bg-gray-50 text-gray-900 font-semibold mt-3 py-2 px-3 rounded shadow-sm text-sm">Log-out</button>
            </>
        ) : (
            <button className=" bg-gray-50 text-gray-900 font-semibold mt-3 py-2 px-3 rounded shadow-sm text-sm">Log-in</button>
        )
     }
</div>
  </div>
  </>
  )
}

