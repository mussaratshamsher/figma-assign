import React from 'react'
import { Button } from "@/components/ui/button"




export default function Contact() {
  return (
    <div className='w-full text-white h-[500px] md:h-[500px] text-center pt-32 
    bg-gradient-to-t from-yellow-400 via-yellow-500 to-yellow-400'>

<h1 className='md:text-4xl text-2xl font-extrabold mb-10'>
    JOIN SHOPPONG COMMUNITY TO <br />GET MONTHLY PROMO</h1>
<p>Type your email down below and be young with generation</p>

<div className='bg-white md:w-[350px] w-70 md:h-14 h-10 rounded md:m-auto ml-3 mr-3 md:mt-10 mt-4'>
<input type="email" placeholder='Add your email here'  className=' md:p-4 p-2 md:w-[272px] '/>
<Button>SEND</Button>
 </div>
    </div>
  )
}
