import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import logo from './../../../public/images/logo.png'


import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from 'next/link'
 //import fashion from "./../../app/fashion" 

export default function Header() {
  return (
    <div className="w-full md:h-24 h-16 flex flex-row justify-around">

<Image src={logo} alt="" width={200} height={400} className='md:w-40 md:h-20 w-14 h-8 mt-3 -ml-14'/>

<ul className="md:flex md:flex-row mt-5 gap-10 hidden">
    <li><Link href="/">CATALOGUE</Link></li>
    <li><Link href="./../fashion">FASHION</Link> </li>
    <li><Link href="./../fav">FAVOURITE</Link></li>
    <li><Link href="./../lifestyle">LIFESTYLE</Link></li>
    <li><Button><Link href="./../contact">SIGN UP</Link></Button></li>
    
</ul>

<Sheet>
  <SheetTrigger className="md:hidden -mr-20"> <Menu/></SheetTrigger>

  <SheetContent>
    
  <ul className="flex flex-col gap-3">
  <li><Link href="/">CATALOGUE</Link></li>
    <li><Link href="./../fashion">FASHION</Link> </li>
    <li><Link href="./../fav">FAVOURITE</Link></li>
    <li><Link href="./../lifestyle">LIFESTYLE</Link></li>
    <li><Button><Link href="./../contact">SIGN UP</Link></Button></li>
    
</ul>
  </SheetContent>
</Sheet>


    </div>
  )
}
