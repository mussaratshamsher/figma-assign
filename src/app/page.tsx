
import Image from 'next/image'
import React from 'react'
import Group from "../../public/images/Group.png"
import iconbar from "../../public/images/iconbar.png"
import Card from '@/components/themecard/Card'
import Fav from './fav/page'
import Lifestyle from './lifestyle/page'
import Contact from './contact/page'






export default function Page() {
  return (
    

    <div className='w-full md:h-[3600px] h-[4800px] bg-white md:mt-5'>
        
      <Image src={Group} alt="" width={1500} height={2000} 
      className='md:w-[1100px] md:h-[500px] m-auto w-95 h-[200px]'/>

      <div className='w-full bg-yellow-300 h-10 md:h-20'>

      <Image src={iconbar} alt="" width={1000} height={1000} 
      className=' md:w-90 md:ml-auto md:mr-auto w-60 ml-3 pt-4' />
      
      </div>
       <Card /> 
       <Fav />
       <Lifestyle />
       <Contact />

    </div>

   
  )
}
