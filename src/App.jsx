import React from "react"
import { Route, Routes } from "react-router-dom"
import Contact from "./Contact/Contact"
import Resume from "./Resume/Resume"
import Works from "./Works/Works"
import Home from "./Home/Home"
import About from "./About/About"

const App = () => {
  return (
    <div className='w-full bg-bg scroll-smooth select-none '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
