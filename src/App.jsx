import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Works from './Pages/Works/Works';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';

const App = () => {
  return (
    <div className='scroll-smooth select-none font-quicksand  bg-stone-100'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
