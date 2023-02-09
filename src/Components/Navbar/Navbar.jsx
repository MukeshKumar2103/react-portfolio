import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import "../Navbar/nav.css"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false)
  console.log(mobileNav)
  return (
    <div>
      <div className='w-full h-80px fixed top-0 z-40 drop-shadow-lg xl:hidden'>
        <div className='w-full h-20 bg-white px-5 flex flex-row items-center justify-between'>
          <div className='text-2xl font-bold'>MUKESHKUMAR</div>
          <FontAwesomeIcon
            icon={faBars}
            className='text-xl hover:cursor-pointer'
            onClick={() => setMobileNav(!mobileNav)}
          />
        </div>
        <div className={`${mobileNav ? "active" : "close"}`}>
          <Sidebar />
        </div>
      </div>
      <div className='hidden xl:flex '>
        <Sidebar />
      </div>
    </div>
  )
}

export default Navbar
