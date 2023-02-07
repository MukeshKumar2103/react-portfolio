import React from "react"
import Navbar from "../../Components/Navbar/Navbar"

const About = () => {
  return (
    <div className='w-full h-screen bg-stone-100'>
      <Navbar />
      <div className='h-screen absolute top-0 left-64 '>
        <p>ABOUT</p>
        <h1>About Me</h1>
      </div>
    </div>
  )
}

export default About
