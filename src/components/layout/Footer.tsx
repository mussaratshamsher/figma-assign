import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-black w-full md:h-[450px] text-white p-20'>

<div>
    <h1 className='text-4xl font-extrabold'>FASHION</h1>
    <p className='text-gray-400 mt-4 mb-4'>Complete your style with awesome  <br />clothes from here</p>
 <ul className='list-none flex flex-row md:gap-4 gap-2'>
   <li className='bg-yellow-300 rounded-md hover:bg-yellow-200 hover:transition-all'><Facebook size={40}/> </li>
   <li className='bg-yellow-300 rounded-md hover:bg-yellow-200 hover:transition-all'><Instagram size={40}/></li>
   <li className='bg-yellow-300 rounded-md hover:bg-yellow-200 hover:transition-all'><Twitter size={40}/></li>
   <li className='bg-yellow-300 rounded-md hover:bg-yellow-200 hover:transition-all'><Linkedin size={40}/></li></ul>

</div>


      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>


 <div>
    <h1><b>Company</b></h1>
    <ul className='list-none text-gray-400 cursor-pointer'>
    <li><Link href="/">Home</Link></li>
    <li><Link href="./../fashion">About</Link> </li>
    <li><Link href="./../fav">Latest</Link></li>
    <li><Link href="./../contact">Contact</Link></li>
    <li><Link href="./../contact">Support</Link></li>
    </ul>
 </div>

<div>
    <p><b>Quick Links</b> </p>
   <ul className='list-none text-gray-400 cursor-pointer'>
    <li>Share Locaiton</li>
    <li>Orders Tracking</li>
    <li>Size Guide</li>
    <li>FAQs</li></ul> 
</div>

<div> 
    <h1><b>Legal</b></h1>
    <ul className='list-none text-gray-400 cursor-pointer'>
    <li>Terms & conditions</li>
    <li>Privacy Policy</li>
    </ul>
</div>


</div>
    </div>
  )
}
