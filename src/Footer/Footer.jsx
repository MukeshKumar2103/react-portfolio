import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCode, faCopyright } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Footer = () => {
  return (
    <div className='px-5 bg-dark text-gray rounded-tl-[4rem] full grid place-items-center'>
      <h2 className='py-4 font-semibold'>MUKESHKUMAR KRISHNAMOORTHI</h2>
      <p className='text-sm text-center py-2'>
        To work in a challenging environment by utilizing my knowledge and
        logical thinking to the best and to improve and upgrade my skills
        according to the global market trends and organizational needs.
      </p>
      <div className='text-lg text-green'>
        <FontAwesomeIcon icon={faGithub} className='px-4' />
        <FontAwesomeIcon icon={faCode} className='px-4' />
      </div>
      <div className='grid grid-cols-3 justify-items-center rounded-full py-2 font-semibold text-xs'>
        <p className='px-7 py-2 border m-3 border-green rounded-t-lg'>Html5</p>
        <p className='px-7 py-2 border m-3 border-green rounded-t-lg'>Css3</p>
        <p className='px-7 py-2 border m-3 border-green rounded-t-lg'>
          JavaScript
        </p>
        <p className='px-7 py-2 border m-3 border-green rounded-t-lg'>
          Bootstrap
        </p>
        <p className='px-7 py-2 border m-3 border-green rounded-t-lg'>
          Tailwind
        </p>
        <p className='px-7 py-2 border m-3 border-green rounded-t-lg'>React</p>
      </div>
      <div className='pb-10 text-sm'>
        <FontAwesomeIcon icon={faCopyright} className='px-3' />
        2023 & Designed By - Mukesh
      </div>
    </div>
  )
}

export default Footer
