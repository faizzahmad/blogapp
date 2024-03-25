import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'About us',
  description: 'The dev About-us page',
}

export default function Aboutus() {
  return (
    <div> 
   <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-[100px] gap-3 items-center justify-center'>
  <div className='w-full py-5'>
<h1 className='text-[25px] font-[800] text-blue-700 leading-normal'>About agency</h1>
<h1 className='text-[35px] font-[800] text-gray-50 leading-[50px] '> We create digital ideas that are bigger, bolder, brver and better</h1>


<div className='flex mt-7 gap-5'>
<p className='text-gray-50 font-semibold text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut facere debitis, deleniti earum voluptate minus quasi at magnam ad, ullam sed iste qui, commodi animi nulla adipisci asperiores alias?</p>
</div>
<div className='mt-7 w-full'>
<div className='w-full grid md:grid-cols-3 grid-cols-2 gap-2'>
  <div>
    <p className='text-[20px] font-[800] text-blue-700'>10 K+</p>
    <p className='text-xs font-semibold'>Years of exprience</p>
  </div>

  <div>
    <p className='text-[20px] font-[800] text-blue-700'>253 K+</p>
    <p className='text-xs font-semibold'>Peple reached</p>
  </div>

  <div>
    <p className='text-[20px] font-[800] text-blue-700'>249 K+</p>
    <p className='text-xs font-semibold'>Service and plugins</p>
  </div>
</div>
</div>
  </div>

  <div className='w-full py-5 flex'>
<Image src='/images/about.png' width={500} height={400} className='rounded ml-auto block'></Image>
  </div>
</div>
    </div>
  )
}
