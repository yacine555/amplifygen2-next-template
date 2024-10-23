import React from 'react'
import Image from "next/image";
import Link from "next/link";


const Menu = () => {
  return (
    <div>
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="hidden lg:block font-bold">MarTech</span>
        </Link>
    </div>
   
  )
}

export default Menu