import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Navbar from "../Navbar/Navbar"

const Contact = () => {
  return (
    <div id='contact' className='h-full'>
      <Navbar />
      <div className='h-[calc(100vh-0px)] px-28  grid grid-cols-2 content-end items-center'>
        <div className=''>
          <div className='w-4/5 h-4/5'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2135.8219517420016!2d79.19228419428698!3d10.95469916669441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baac55a4a38e72f%3A0x21868d3aa5f5f08e!2sKeelavarappankurichi!5e0!3m2!1sen!2sin!4v1674831951370!5m2!1sen!2sin'
              title='address'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
              className='w-full h-full'></iframe>
          </div>
          <div className='py-5 h-1/3'>
            <h2 className='py-3'>Contact Info</h2>
            <div className='py-2'>
              <FontAwesomeIcon
                icon={faLocationDot}
                className='pr-5 text-green'
              />
              <span>Keelavarappankurichi, Ariyalur-621715</span>
            </div>
            <div className='py-2'>
              <FontAwesomeIcon icon={faPhone} className='pr-5 text-green' />
              <span>+91 9943862417</span>
            </div>
            <div className='py-2'>
              <FontAwesomeIcon icon={faEnvelope} className='pr-5 text-green' />
              <span>mukesh2132000@gmail.com</span>
            </div>
          </div>
        </div>
        <div className=''>
          <h2 className='text-3xl text-dark pb-4'>Contact Me</h2>
          <div className='py-1 flex flex-col'>
            <label className='pb-1 font-semibold'>Name</label>
            <input
              type='text'
              className='px-4 py-3 border-2 text-sm text-dark  border-gray rounded-lg outline-none'
            />
          </div>
          <div className='py-1 flex flex-col'>
            <label className='pb-1 font-semibold'>Email</label>
            <input
              type='text'
              className='px-4 py-3 border-2 text-sm text-dark border-gray rounded-lg outline-none'
            />
          </div>
          <div className='py-1 flex flex-col'>
            <label className='pb-1 font-semibold'>Phone Number</label>
            <input
              type='text'
              className='px-4 py-3 border-2 text-sm text-dark border-gray rounded-lg outline-none'
            />
          </div>
          <div className='py-1 flex flex-col'>
            <label className='pb-1 font-semibold'>Message</label>
            <textarea
              rows='5'
              cols='30'
              className='px-4 py-3 border-2 text-sm text-dark border-gray rounded-lg outline-none'
            />
          </div>
          <div className='flex justify-between py-5'>
            <button className='px-12 py-3 text-center font-semibold border border-dark rounded-full text-dark hover:bg-secondary hover:text-light hover:border-secondary'>
              RESET
            </button>
            <button className='px-12 py-3 text-center font-semibold border hover:border-dark rounded-full hover:text-dark bg-secondary text-light hover:bg-transparent '>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
