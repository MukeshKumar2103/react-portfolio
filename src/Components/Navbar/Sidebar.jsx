import React from "react"
import { Link } from "react-router-dom"
import "../Navbar/nav.css"
import {
  faCopyright,
  faEnvelopeOpen,
  faFolderBlank,
  faGear,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const navStyle = {
  textAlign: "left",
  fontSize: "16px",
  fontWeight: "500",
  letterSpacing: "2px",
  paddingBlock: "10px",
  color: "#888",
}

const icon = {
  paddingRight: "10px",
  color: "#000",
  fontSize: "14px",
}

const Sidebar = () => {
  return (
    <div className='w-[265px] h-[100vh] fixed z-50 top-0 bg-white'>
      <div className='grid place-items-center content-center h-full'>
        <div className='font-marcellus text-4xl font-bold pb-12'>MUKESH</div>
        <div className='flex flex-col pb-12'>
          <Link to='/' style={navStyle}>
            <FontAwesomeIcon icon={faHome} style={icon} />
            Home
          </Link>
          <Link to='/about' style={navStyle}>
            <FontAwesomeIcon icon={faUser} style={icon} />
            About
          </Link>
          <Link to='/works' style={navStyle}>
            <FontAwesomeIcon icon={faFolderBlank} style={icon} />
            Works
          </Link>
          <Link to='/services' style={navStyle}>
            <FontAwesomeIcon icon={faGear} style={icon} />
            Services
          </Link>
          <Link to='/contact' style={navStyle}>
            <FontAwesomeIcon icon={faEnvelopeOpen} style={icon} />
            Contacts
          </Link>
        </div>
        <div className='text-gray-500 italic font-krub'>
          <p>
            <FontAwesomeIcon
              icon={faCopyright}
              className='text-slate-400 pr-2'
            />
            2023 Mukesh
          </p>
          <p className=''>
            Created By -
            <span className='text-black font-quicksand'>Mukeshkumar</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
