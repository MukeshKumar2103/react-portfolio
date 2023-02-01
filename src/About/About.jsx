import React from "react"
import Navbar from "../Navbar/Navbar"
import person from "../Assets/mukesh.png"
import tailwind from "../Assets/tailwind.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFilePen,
  faUniversity,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons"
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
// import Footer from "../Footer/Footer"

const About = () => {
  const bio = [
    {
      id: 1,
      name: "Name",
      detail: "MUKESHKUMAR",
    },
    {
      id: 2,
      name: "Age",
      detail: "22",
    },
    {
      id: 3,
      name: "Gender",
      detail: "MALE",
    },
    {
      id: 4,
      name: "Date of Birth",
      detail: "21/ 03/ 2000",
    },
    {
      id: 5,
      name: "Maritial Status",
      detail: "SINGLE",
    },
    {
      id: 6,
      name: "Languages",
      detail: "Tamil, English",
    },
    {
      id: 7,
      name: "Address",
      detail: "KEELAVARAPPANKURICHI, ARIYALUR, TAMILNADU, INDIA - 621715",
    },
  ]

  const skillData = [
    {
      id: 1,
      name: "HTML5",
      icon: faHtml5,
      value: 85,
      color: "#e56128",
    },
    {
      id: 2,
      name: "CSS3",
      icon: faCss3,
      value: 75,
      color: "#3d7cd6",
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      icon: faJsSquare,
      value: 75,
      color: "#e4d04b",
    },
    {
      id: 4,
      name: "REACT JS",
      icon: faReact,
      value: 75,
      color: "#5bcfee",
    },
    {
      id: 5,
      name: "BOOTSTRAP",
      icon: faBootstrap,
      value: 60,
      color: "#8413ef",
    },
  ]

  return (
    <div id='about' className='w-full h-full'>
      <Navbar />
      <div className='w-full h-[80vh] px-10 grid grid-col-1 content-end items-center xl:px-28 lg:px-14 xl:h-screen xl:grid-cols-2 lg:h-screen lg:grid-cols-2 md:h-[95vh] md:grid-cols-2'>
        <div className='flex justify-center'>
          <img
            src={person}
            alt='person'
            className='w-3/5 h-3/5 rounded-2xl bg-dark  xl:w-2/4 xl:h-2/4 lg:w-3/5 lg:h-3/5'
          />
        </div>
        <div className='py-10'>
          <h2 className='font-semibold text-green text-base xl:text-2xl'>
            SKILLS
          </h2>
          <div className='py-2 grid grid-cols-2 place-items-center'>
            {skillData.map((skill) => (
              <div title={skill.value} className=''>
                <FontAwesomeIcon
                  icon={skill.icon}
                  className='py-3 text-4xl xl:text-5xl lg:text-5xl md:text-5xl'
                  color={skill.color}
                />
                {/* <p className='font-semibold' color={skill.color}>
                {skill.name}
              </p> */}
              </div>
            ))}
            <img
              src={tailwind}
              alt='tailwind css'
              className='w-2/5 py-2 xl:w-1/3 lg:w-1/3'
            />
          </div>
        </div>
      </div>
      <div className='px-10 py-16 grid grid-cols-1 content-center justify-center xl:px-28 lg:px-14 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
        <div className='pb-8'>
          <h2 className='font-semibold pb-4 text-green text-base xl:text-2xl'>
            MY BIO
          </h2>
          {bio.map((data) => (
            <div
              key={data.id}
              className='py-2 font-semibold text-xs grid grid-cols-3 xl:text-base lg:text-sm md:text-sm xl:w-3/5 lg:w-3/5 md:w-3/5'>
              <p className=''>{data.name}</p>
              <span className='text-green justify-self-center'>:</span>
              <p className='justify-self-start'>{data.detail}</p>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-1 text-xs font-semibold xl:text-base lg:text-sm md:text-sm'>
          <h2 className='text-base font-semibold text-green xl:text-2xl'>
            EDUCATION
          </h2>
          <div className='py-4 xl:py-1'>
            <div className='pb-2'>
              <FontAwesomeIcon icon={faUserGraduate} className='pr-4' />
              MASTER OF COMPUTER APPLICATION
            </div>
            <div className='pb-2'>
              <FontAwesomeIcon icon={faUniversity} className='pr-4' />
              PRIST UNIVERSITY.
            </div>
            <div className='pb-2'>
              <FontAwesomeIcon icon={faFilePen} className='pr-4' />
              7.0
            </div>
          </div>
          <div className='py-4 xl:py-1'>
            <div className='pb-2'>
              <FontAwesomeIcon icon={faUserGraduate} className='pr-4' />
              BACHELOR OF COMPUTER APPLICATION
            </div>
            <div className='pb-2'>
              <FontAwesomeIcon icon={faUniversity} className='pr-4' />
              PERIYAR MANIAMMAI INSTITUE OF SCIENCES AND TECHNOLOGY
            </div>
            <div className='pb-2'>
              <FontAwesomeIcon icon={faFilePen} className='pr-4' />
              7.0
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default About
