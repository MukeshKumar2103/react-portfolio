import React from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Mukesh from "../../../src/Assets/images/mukesh.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"

const socialIcon = {
  paddingRight: "20px",
}

const Home = () => {
  return (
    <div className='w-full h-screen bg-stone-100'>
      <Navbar />
      <div className='w-full h-screen '>
        <div className='h-full flex flex-col justify-center items-center xl:ml-32 xl:flex-row  xl:left-[400px]'>
          <img
            src={Mukesh}
            alt='myImage'
            className='w-52 h-52 border-none rounded-full bg-slate-400 xl:w-72 xl:h-72 '
          />
          <div className='pt-20 text-center xl:text-left xl:px-16 xl:pt-0'>
            <h2 className='text-5xl font-bold tracking-wide font-giraffe xl:text-7xl'>
              MUKESH KUMAR
            </h2>
            <h5 className='text-lg font-marcellus font-semibold pt-4 pb-7'>
              FRONTEND DEVELOPER
            </h5>
            <p className='px-5 text-stone-500 xl:w-[500px] xl:px-0 md:px-28 sm:px-24'>
              Creative Photographer based in New York and happy to travel all
              over Europe to capture photos.
            </p>
            <div className='py-3'>
              <a href='/' style={socialIcon}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href='/' style={socialIcon}>
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a href='/' style={socialIcon}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
