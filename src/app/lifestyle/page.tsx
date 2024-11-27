import Image from 'next/image'
import React from 'react'
import ellipse from "../../../public/images/ellipse.png"
import app from "../../../public/images/app.png"
import favb1 from "../../../public/images/favb1.png"
import favb2 from "../../../public/images/favb2.png"


export default function Lifestyle() {
  return (
   <div>
<div className='flex flex-col md:flex-row md:p-9 h-[650px] md:gap-10 md:w-[1100px] w-full'>

<div className='md:w-[550px] w-full md:p-20 md:ml-10 ml-5'>
  <h1 className='font-extrabold md:text-3xl text-2xl mt-5'><b>DOWNLOAD APP & <br /> GET THE VOUCHER!</b></h1>
  <br />
  <p className=' mb-8'>Get 30% for first transaction using <br /> Randovision mobile app for now.</p>
 <div className='flex gap-2'>
 <Image src={favb1} alt="" width={200} height={200} className='w-32 h-16'/>
 <Image src={favb2} alt="" width={200} height={200} className='w-32 h-16'/>
 </div>
</div>

<div className='md:w-[550px] w-full p-5 relative ml-4 mt-7'>
<div className='bg-yellow-400 rounded-full md:w-5 md:h-5 w-3 h-3 ml-60 relative md:ml-80 md:mt-8'></div>

<Image src={ellipse} alt="" width={200} height={200} 
className='md:w-96 md:h-96 w-64 h-64 absolute'/>
<Image src={ellipse} alt="" width={200} height={200} 
className='md:w-80 md:h-80 w-52 h-52 absolute md:mt-8 md:ml-8 ml-5 mt-5'/>
<Image src={ellipse} alt="" width={200} height={200}
 className='md:w-72 md:h-72 w-44 h-44 absolute md:mt-12 md:ml-12 mt-9 ml-9'/> 

 <Image src={app} alt="" width={200} height={200} 
className='absolute md:ml-10 md:w-[300px] md:h-[500px] w-[200px] h-[350px] -mt-10 md:-mt-14 ml-6'/> 

<div className='bg-gray-400 rounded-full w-2 h-2 '></div>

<div className='bg-yellow-400 rounded-full w-4 h-4 md:mt-80 mt-60'></div>
<div className='bg-gray-400 rounded-full w-3 h-3 relative md:ml-96 ml-60'></div>

</div>
</div>


   </div>
  )
}
