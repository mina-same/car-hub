import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-row  flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">

        <div className="flex flex-col items-start justify-start gap-6">
          <Image src="/logo.svg" width={118} height={18} alt="logo"/>
          <p className="text-base text-gray-700">Carhub 2023 <br/>
            All rights reserved &copy; 
          </p>
        </div>

        <div className="footer__links">
          {
            footerLinks.map((link, index) => (
              <div className="footer__link" key={index}>
                <h3 className="font-bold">{link.title}</h3>
                  {
                    link.links.map((item, index) => (
                      <Link href={item.url} key={item.url} className='text-gray-500'>
                        {item.title}
                      </Link>
                    ))
                  }
              </div>
            ))
          }
        </div>

      </div>

        <div className="flex justify-between items-center flex-warp border-t mt-10 border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 CarHub. All rights reserved</p>
          <div className="footer__copyrights-link">
            <Link className="text-gray-500" href="/">
              Privacy Police
            </Link>
            <Link className="text-gray-500" href="/">
              Terms of use 
            </Link>
          </div>
        </div>

    </footer>
  )
}

export default Footer
