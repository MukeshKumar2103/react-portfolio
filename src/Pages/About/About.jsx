import React from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Mukesh from "../../../src/Assets/images/mukesh.png"

const About = () => {
  return (
    <div className='w-full h-full bg-stone-100'>
      <Navbar />
      <div className='w-full h-full px-4 py-32'>
        <div className='py-5 border-b border-gray-400'>
          <span className='px-3 py-2 bg-gray-200 text-sm font-bold'>ABOUT</span>
          <h1 className='text-2xl font-bold pt-4 pb-8'>About Me</h1>
          <img
            src={Mukesh}
            alt='myImage'
            className='w-full h-[400px] bg-slate-400 object-cover'
          />
          <h3 className='text-2xl font-marcellus pt-7 font-semibold tracking-wide'>
            Mukesh Kumar
          </h3>
          <p className='py-1'>Web Developer</p>
        </div>
        <div className='py-7 border-b border-gray-400'>
          <p className='leading-loose tracking-wideest'>
            I am Mukeshkumar and I graduated from PRIST University in July 2022.
            I have studied MCA computer applications. My final project is an
            e-commerce website built using html5, css3 and javascript. When I
            was thinking about my next steps, I realised that I wanted to become
            a full-stack developer. So I decided to start my career as a
            frontend developer and took the course "Frontend Development with
            React" at qtrees technologies in Coimbature.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
