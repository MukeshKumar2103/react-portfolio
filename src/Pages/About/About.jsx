import React from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Mukesh from "../../../src/Assets/images/mukesh.png"
import CV from "../../Assets/RESUME_MUKESHKUMAR.pdf"

const About = () => {
  const bioData = [
    {
      id: 1,
      name: "Birthday",
      value: "21 / 03 / 2000",
    },
    {
      id: 2,
      name: "Age",
      value: 22,
    },
    {
      id: 3,
      name: "Address",
      value: "Ariyalur, Tamilnadu.",
    },
    {
      id: 4,
      name: "Email",
      value: "mukesh2132000@gmail.com",
    },
    {
      id: 5,
      name: "Phone",
      value: "+91 9943862417",
    },
    {
      id: 6,
      name: "Nationality",
      value: "India",
    },
    {
      id: 7,
      name: "Degree",
      value: "Master of Art's",
    },
    {
      id: 8,
      name: "Study",
      value: "PRIST University",
    },
    {
      id: 9,
      name: "Languages",
      value: "Tamil, English",
    },
    {
      id: 10,
      name: "Interest",
      value: "Music",
    },
  ]

  const programingSkills = [
    {
      id: 1,
      name: "Html5",
      value: 95,
    },
    {
      id: 2,
      name: "Css3",
      value: 85,
    },
    {
      id: 3,
      name: "JavaScript",
      value: 80,
    },
    {
      id: 4,
      name: "React js",
      value: 85,
    },
  ]

  const handleCV = (url) => {
    const aTag = document.createElement("a")
    aTag.href = url
    aTag.setAttribute("download", "RESUME_MUKESHKUMAR")
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div className='w-full h-full'>
      <Navbar />
      <div className='w-full h-auto bg-gray-50 absolute py-32 xl:w-[80%] xl:pl-4 xl:left-[300px]'>
        <div className='px-5 xl:px-28'>
          <div className='py-5 border-b border-gray-400'>
            <span className='px-4 py-2 bg-gray-200 text-sm font-bold'>
              ABOUT
            </span>
            <h1 className='text-3xl font-extrabold pt-4 pb-8'>About Me</h1>
            <div className='w-full h-full flex items-center lg:w-[600px] lg:h-[600px] md:w-[600px] md:h-[600px]'>
              <img
                src={Mukesh}
                alt='myImage'
                className='w-full h-full bg-slate-400'
              />
            </div>
            <h3 className='text-2xl font-marcellus pt-7 font-bold tracking-wider'>
              Mukesh Kumar
            </h3>
            <p className='py-1 text-sm'>Front-end Developer</p>
          </div>
          <div className='py-10 border-b border-gray-400'>
            <p className='pb-4 leading-loose tracking-wideest'>
              I am Mukeshkumar and I graduated from PRIST University in July
              2022. I have studied MCA computer applications. My final project
              is an e-commerce website built using html5, css3 and javascript.
            </p>
            <p className='leading-loose tracking-wideest'>
              When I was thinking about my next steps, I realised that I wanted
              to become a full-stack developer. So I decided to start my career
              as a frontend developer and took the course "Front-end Development
              with React" at Qtrees technologies in Coimbature.
            </p>
          </div>
          <div className='py-7 border-b border-gray-400 grid lg:grid-cols-2 md:grid-cols-2  '>
            {bioData.map((data) => (
              <div key={data.id} className='flex flex-row pb-2'>
                <p className='w-20 font-semibold'>{data.name}</p>
                <span className='px-2'>:</span>
                <p>{data.value}</p>
              </div>
            ))}
          </div>
          <div className='mt-10 mb-20'>
            <button
              className='px-6 py-3 bg-black text-white font-marcellus font-semibold tracking-wider'
              onClick={() => handleCV(CV)}>
              Download CV
            </button>
          </div>
        </div>
        <div className='bg-white px-5 py-10 xl:pl-28'>
          <div>
            <h2 className='text-xl font-bold tracking-wide'>
              Programming Skills
            </h2>
            <div>
              {programingSkills.map((skill) => (
                <div className='w-full pr-5'>
                  <div className='flex justify-between'>
                    <p>{skill.name}</p>
                    <p>{skill.value}</p>
                  </div>
                  <div className='border-2 h-5 bg-white rounded-full'>
                    <div className='border-none  rounded-full outline-none bg-black '></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
