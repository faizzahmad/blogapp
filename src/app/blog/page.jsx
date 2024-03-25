
import { getPosts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
export const metadata = {
  title: 'The dev',
  description: 'The dev blog page',
}

const  Blogpgae  = async() =>  {
const posts = await getPosts();

  return (
    <div className='w-full'>
      <div className='py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
       {
        posts.map((items,index) => (
          <div className='w-full mb-3' key={index}>
          <div className='w-full h-[300px] relative'>
            <Image src={items.img} fill alt='blogbannerimage'></Image>
          </div>   <div className='py-2 flex'>
        <p className='mb-0  text-sm text-gray-50 font-semibold capitalize'>{items.title} </p>
        <p className='mb-0  text-[10px] font-semibold ml-auto text-gray-700 pr-3'>{items.createdAt.toString().slice(0,15)}</p>
        </div>     

          <p className='text-gray-50 font-semibold text-xs py-2 mb-0'>{items.desc}</p>

          <button className=' text-gray-700 font-semibold text-xs py-1 px-3 border-[0.5px] border-gray-700 duration-100 transition-all  hover:bg-white hover:text-gray-950'>
      <Link href={`/blog/${items.slug}`} className=''>Read more</Link>
      
          </button>
        </div>
        ))
       }



        
      </div>
    </div>
  )
}

export default Blogpgae