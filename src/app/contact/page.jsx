import Image from "next/image";
export const metadata = {
  title: 'Contact',
  description: 'The dev Contact page',
}
export default function Contactpage() {
  return (
    <div> 
    <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-[100px] gap-3 items-center justify-center'>
    <div className='w-full py-5 flex'>
 <Image src='/images/contact.png' width={500} height={400} className='rounded ml-auto block'></Image>
   </div>
   <div className='w-full py-5 '>
 <form className="grid grid-cols-1 gap-3">
 <div>
  <input type="text" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Name and Surname"  />
 </div>

 <div>
  <input type="email" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="info@expample.in"  />
 </div>


 <div>
  <input type="number" className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Contact no"  />
 </div>


 <div>
  <textarea className="w-full bg-cyan-950  shadow-sm rounded focus:outline-none p-2 text-sm placeholder:text-xs" placeholder="Address" rows={6} ></textarea>
 </div>

 <div>
  <button type="submit" className="w-full font-semibold text-sm text-gray-50 bg-blue-700 py-3 rounded">Submit</button>
 </div>
 </form>
   </div>
 

 </div>
     </div>
  )
}
