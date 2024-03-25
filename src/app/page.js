import Image from 'next/image';


export default function Home() {

  return (
    <main>
<div className='w-full'>
<div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-[100px] gap-3 items-center justify-center'>
  <div className='w-full py-5'>
<h1 className='md:text-[60px] text-[40px] leading-[50px] font-[800] text-white md:leading-[80px]'>Creativity Thoughts Agency</h1>
<p className='mt-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit omnis consequatur iure adipisci error consequuntur.</p>

<div className='flex mt-7 gap-5'>
  <button className='px-5 py-3 bg-blue-700 text-gray-50 font-semibold text-xs rounded'>Learn more</button>
  <button  className='px-5 py-3 bg-gray-50 text-gray-700 font-semibold text-xs rounded'>Contact</button>
</div>
<div className='mt-7'>
<Image src='/images/brands.png' height={100} width={500} alt='chingaro image'></Image>
</div>
  </div>

  <div className='w-full py-5 flex'>
<Image src='/images/hero.gif' width={500} height={400} className='rounded ml-auto block'></Image>
  </div>
</div>
</div>
    
    </main>
  )
}
