import {
  faAt,
  faBars,
  // faFileLines,
  faHome,
  faPaintBrush,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
// import { Link, NavLink } from "react-router-dom"
import logoM from "../Assets/mukesh.png"

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: "HOME",
      icon: faHome,
      to: "/",
    },
    {
      id: 2,
      name: "ABOUT",
      icon: faUser,
      to: "/about",
    },
    // {
    //   id: 3,
    //   name: "RESUME",
    //   icon: faFileLines,
    //   to: "/resume",
    // },
    {
      id: 4,
      name: "WORKS",
      icon: faPaintBrush,
      to: "/works",
    },
    {
      id: 5,
      name: "CONTACT",
      icon: faAt,
      to: "/contact",
    },
  ]
  return (
    <div className='w-full h-20 grid content-center fixed text-dark font-semibold xl:text-base lg:text-sm xl:h-28 lg:h-28 md:h-24'>
      <div className='grid grid-cols-2 items-center px-10 xl:px-28 xl:grid-cols-3 lg:px-14 lg:grid-cols-3'>
        <img
          src={logoM}
          alt=''
          className='w-9 h-9 rounded-full bg-dark xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-12 md:h-12'
        />
        <nav className='hidden justify-self-center xl:block lg:block'>
          {navLinks.map((nav) => (
            <Link
              to={nav.to}
              key={nav.id}
              className='font-semibold hover:text-green xl:px-2 lg:px-1'>
              <FontAwesomeIcon icon={nav.icon} className='pr-1' />
              <span className=''>{nav.name}</span>
            </Link>
          ))}
        </nav>
        <div className='justify-self-end flex justify-end'>
          <button className='border-2 px-8 py-2.5 rounded-full border-secondary hover:bg-secondary hover:text-light hidden xl:block lg:block'>
            HIRE ME
          </button>
          <FontAwesomeIcon
            icon={faBars}
            className='justify-self-end block xl:hidden lg:hidden'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
