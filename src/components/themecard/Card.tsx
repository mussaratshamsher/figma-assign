import Image from 'next/image'
import React from 'react'

import catatitle from "../../../public/images/catatitle.png"
import frame1 from "../../../public/images/frame1.png"
import frame2 from "./../../../public/images/frame2.jpg"
import frame3 from "../../../public/images/frame3.png"
import { MoveRight } from 'lucide-react'
import imagebg from "../../../public/images/imagebg.png"
import yellowbg from "../../../public/images/yellowbg.png"
import { Button } from '../ui/button'



export default function Card() {
  return (
    <div>
<Image src={catatitle} alt="" width={400} height={400}
 className='md:w-60 md:h-24 md:ml-20 md:mt-20 w-20 h-8 mt-5 ml-10' />


    <div className='w-90 md:mt-10 mt-5 flex flex-col md:flex-row md:gap-16'>

<div className='md:ml-16 ml-5 mr-auto mb-5'>
<Image src={frame1} alt="" width={100} height={100}
className='w-[270px] md:w-[300px] h-[420px] rounded-md'/> 

<div className='flex flex-row md:gap-40 gap-10 mt-3'><h1>Tees & T-shirt</h1> <MoveRight /></div>
<p className='text-gray-500'>Explore Now</p>
</div>

<div className='ml-5 mr-auto mb-5'>
<Image src={frame2} alt="" width={100} height={100}
className='w-[270px] md:w-[300px] h-[420px] rounded-md'/> 

<div className='flex flex-row md:gap-40 gap-10 mt-3'><h1>Tees & T-shirt</h1> <MoveRight /></div>
<p className='text-gray-500'>Explore Now</p>
</div>

<div className='ml-5 mr-auto mb-5'>
<Image src={frame3} alt="" width={100} height={100}
className='w-[270px] md:w-[300px] h-[420px] rounded-md'/> 

<div className='flex flex-row md:gap-40 gap-10 mt-3'><h1>Tees & T-shirt</h1> <MoveRight /></div>
<p className='text-gray-500'>Explore Now</p>
</div>

</div>

<div className='w-full md:h-[510px] flex flex-col md:flex-row mt-10 p-2
 bg-gradient-to-t from-yellow-500 via-yellow-200 to-yellow-400'>

  <Image src={imagebg} alt="" width={200} height={200} className='md:w-[600px] md:h-[500px] w-full '/>
 
 <div className='md:p-20 md:ml-10 ml-7'>
  <Image src={yellowbg} alt="" width={200} height={200} className="md:w-72 w-40 md:h-40 md:mt-20 mt-5" />
  <h2>Spend minimal $100 get 30% off  <br />voucher code for your next purchase
    <br />
  <b>1 June - 10 June 2021 </b><br />
"Terms & Conditions apply"
  </h2> <br />
  
  <Button >SHOP NOW</Button>
  </div>

</div> 
    </div>
  )
}
