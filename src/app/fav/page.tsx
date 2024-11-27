import Image from 'next/image'
import React from 'react'

import fav from "../../../public/images/fav.png"
import fav1 from "../../../public/images/fav1.png"
import fav2 from "../../../public/images/fav2.png"

import { MoveRight } from 'lucide-react'


export default function Fav() {
  return (
    <div>

   <Image src={fav} alt="" width={300} height={300}  className="md:ml-28 mt-10 w-40 p-2" />

<div className='flex flex-col md:flex-row md:p-10  md:gap-10'>
<div>
<Image src={fav1} alt="" width={800} height={800}  
className="w-[500px] h-[400px] rounded md:ml-20" />
<div className='flex flex-row md:gap-40 md:ml-20 ml-5 gap-10 mt-3'><h1><b>Trending on instagram</b></h1> <MoveRight/></div>
<p className='text-gray-500 md:ml-20 ml-5'>Explore Now</p>
</div>

<div>
<Image src={fav2} alt="" width={800} height={800}  
className="w-[500px] h-[400px] rounded md:ml-5" />
<div className='flex flex-row md:gap-40 md:ml-20 ml-5 gap-10 mt-3'><h1><b>All Under $40</b></h1> <MoveRight/></div>
<p className='text-gray-500 md:ml-20 ml-5'>Explore Now</p>
</div>

</div>



    </div>
  )
}
