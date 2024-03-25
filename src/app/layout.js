import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
title:{
  default : 'The dev',
  template : '%s | The dev'
},
description : 'The dev home page'
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className=' bg-gray-900 text-gray-50 w-full'>
      <div className='w-full min-h-[100vh] px-[50px]'>
      <Navbar/>
      {children}
      <Footer/>
      </div>
     
      </body>
    </html>
  )
}
