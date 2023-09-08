import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className="w-full absolute z-100 ">
      <nav className="max-w-[1440px] flex mx-auto justify-between items-center sm:px-16 px-6 py-4">
        <Link href="" className="flex justify-center items-center">
          <Image className="object-contain" width="118" height="18" alt="car hub logo" src="/logo.svg"/>
        </Link>

        <CustomButton 
          title="Sign in"
          containerStyle="text-primary-blue rounded-full bg-white rounded-full z-50 shadow-md min-w-[130px]"
          btnType="button"
        />
      </nav>
    </header>
  )
}

export default Navbar
