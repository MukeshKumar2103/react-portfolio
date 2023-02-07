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
      <div className=' w-[83%] h-screen absolute top-0 left-64 grid place-content-center'>
        <div className='flex flex-row items-center'>
          <img
            src={Mukesh}
            alt=''
            className='w-64 h-64 border-none rounded-full bg-slate-400'
          />
          <div className='px-16'>
            <h2 className='font-giraffe text-7xl tracking-wider font-bold'>
              MUKESH KUMAR
            </h2>
            <h5 className='py-3 text-xl tracking-widest font-semibold font-marcellus'>
              FRONTEND DEVELOPER
            </h5>
            <p className='w-[450px] tracking-wide text-slate-500'>
              Creative Photographer based in New York and happy to travel all
              over Europe to capture photos.
            </p>
            <div className='pt-5'>
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
