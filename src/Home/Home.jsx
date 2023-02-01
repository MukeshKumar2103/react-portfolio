import React from "react"
import Navbar from "../Navbar/Navbar"
import bg from "../Assets/about/img5.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons"
import {
  faAt,
  faCode,
  faDownload,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons"
import Footer from "../Footer/Footer"
import cal from "../Assets/mock-up/cal-mockup.png"

const Home = () => {
  const projectCardDetails = [
    {
      id: 1,
      name: "CALCULATOR",
      img: cal,
      icon1: faHtml5,
      icon2: faCss3,
      icon3: faJsSquare,
      git: "/",
      view: "/",
      p1: "HTML5",
      p2: "CSS3",
      p3: "JAVASCRIPT",
    },
    {
      id: 2,
      name: "CALCULATOR",
      img: cal,
      icon1: faHtml5,
      icon2: faCss3,
      icon3: faJsSquare,
      git: "/",
      view: "/",
      p1: "HTML5",
      p2: "CSS3",
      p3: "JAVASCRIPT",
    },
    {
      id: 3,
      name: "CALCULATOR",
      img: cal,
      icon1: faHtml5,
      icon2: faCss3,
      icon3: faJsSquare,
      git: "/",
      view: "/",
      p1: "HTML5",
      p2: "CSS3",
      p3: "JAVASCRIPT",
    },
    {
      id: 4,
      name: "CALCULATOR",
      img: cal,
      icon1: faHtml5,
      icon2: faCss3,
      icon3: faJsSquare,
      git: "/",
      view: "/",
      p1: "HTML5",
      p2: "CSS3",
      p3: "JAVASCRIPT",
    },
    {
      id: 5,
      name: "CALCULATOR",
      img: cal,
      icon1: faHtml5,
      icon2: faCss3,
      icon3: faJsSquare,
      git: "/",
      view: "/",
      p1: "HTML5",
      p2: "CSS3",
      p3: "JAVASCRIPT",
    },
  ]

  return (
    <div className='w-full h-full'>
      <Navbar />
      <div className='h-screen grid grid-cols-1 content-center px-5 pt-24 xl:h-screen lg:h-screen md:h-screen xl:px-28 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 lg:px-14 xl:content-end lg:content-end md:content-center max-xl:content-end xl:pt-0 lg:pt-0'>
        <div className=' flex flex-col justify-end items-center md:justify-center'>
          <h2 className='text-2xl text-dark font-sans xl:text-5xl lg:text-4xl md:text-3xl'>
            MUKESHKUMAR
          </h2>
          <p className='text-sm py-4 text-secondary xl:text-xl lg:text-lg md:text-base xl:py-5 lg:py-5'>
            FRONTEND DEVELOPER
          </p>
          <div className='text-dark text-sm xl:text-lg lg:text-lg md:text-base'>
            <a
              href='https://github.com/MukeshKumar2103'
              target='_blank'
              rel='noreferrer'>
              <FontAwesomeIcon
                icon={faGithub}
                className='px-2 hover:text-green'
              />
            </a>
            <a href='/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon
                icon={faCode}
                className='px-2 hover:text-green'
              />
            </a>
          </div>
          <div className='py-4 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2'>
            <button
              className='mx-2 my-3 px-7 py-4  text-xs font-semibold border-2 rounded-full transition duration-300 linear bg-secondary border-secondary shadow-xl text-light  hover:bg-transparent hover:text-dark xl:px-10 xl:py-5 lg:px-8 lg:py-4 xl:text-md lg:text-sm'
              path='../assets/MukeshCV.pdf'
              download>
              DOWNLOAD CV
              <FontAwesomeIcon icon={faDownload} className='px-2' />
            </button>
            <button className='mx-2 my-3  px-7 py-4 text-xs font-semibold border-2 rounded-full transition duration-300 linear hover:bg-secondary border-secondary shadow-xl  hover:text-light text-dark xl:px-10 xl:py-5 lg:px-8 lg:py-4 xl:text-md lg:text-sm'>
              <FontAwesomeIcon icon={faAt} className='px-2' />
              CONTACT ME
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          <img
            src={bg}
            alt='about-img'
            className='w-full xl:w-4/5 lg:w-full md:w-full'
          />
        </div>
      </div>
      <div className='h-full px-5 py-10 text-dark'>
        <h2 className='text-center pb-10 text-3xl font-semibold xl:text-4xl'>
          PROJECTS
        </h2>
        <div className='grid grid-cols-1 place-items-center justify-items-center gap-y-5 xl:gap-y-12 lg:gap-y-8  xl:px-40 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
          {projectCardDetails.map((projectcard) => (
            <div
              key={projectcard.id}
              className='w-60 h-72 bg-light rounded-xl hover:shadow-3xl xl:w-72 xl:h-80 lg:w-72 lg:h-80 '>
              <img
                src={projectcard.img}
                alt='card-img'
                className='w-full h-4/6 rounded-xl '
              />
              <div className='px-5 pt-2'>
                <p className='text-base font-semibold xl:text-xl'>
                  {projectcard.name}
                </p>
                {/* <div className='text-sm pb-4'>
                  <FontAwesomeIcon icon={projectcard.icon1} className='pr-3' />
                  <FontAwesomeIcon icon={projectcard.icon2} className='pr-3' />
                  <FontAwesomeIcon icon={projectcard.icon3} className='pr-3' />
                </div> */}
                <div className='text-xs text-gray pb-3'>
                  {projectcard.p1} - {projectcard.p2} - {projectcard.p3}
                </div>
                <div className='text-base flex flex-row justify-between xl:text-xl'>
                  <a href={projectcard.git} className='hover:text-green'>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={projectcard.view} className='hover:text-green'>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
