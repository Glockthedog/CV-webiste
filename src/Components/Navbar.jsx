import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {Link} from 'react-scroll'
import { BsFillSunFill, BsMoonFill} from 'react-icons/bs'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () =>{setNav(!nav)}
  const [scroll, setScroll] = useState(false)
  const handleScroll = () =>{setScroll(!scroll)}
  const [theme, setTheme] = useState('dark')
  const handleThemeSwitch = () =>{
  const html = document.querySelector('html')
      if (theme === 'light') {
          setTheme('dark');
          html.classList.add('dark');
      } else {
          html.classList.remove('dark');
          setTheme('light')
      }
  
    }
    
  
  

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-black dark:text-red'>
         <div className=''>

        {/*theme switch button */}

       <button onClick={handleThemeSwitch} className='animate-pulse dark:text-xl p-2 dark:animate-pulse border-blue-800 dark:border-white dark:bg-transparent dark:text-white text-black rounded-full w-9 h-15 flex justify-center items-center '>
        {
         theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />
        }
       </button>

        </div>
       

       {/* menu */}
       
        <ul className='hidden md:flex md:bg-transparent md:text-black md:dark:text-white'>
            <li className='hover:border-x-2 hover:border-black dark:hover:border-white'>
            <Link  to="home"  smooth={true} duration={500}>
          Home
        </Link>
            </li>
            <li className='hover:border-x-2 hover:border-black dark:hover:border-white'>
            <Link  to="about"  smooth={true} duration={500}>
          About
        </Link>
            </li >
            <li className='hover:border-x-2 hover:border-black dark:hover:border-white'><Link  to="skills"  smooth={true} duration={500}>
          Skills
        </Link>
        </li>
            <li className='hover:border-x-2 hover:border-black  dark:hover:border-white'> 
            <Link  to="contact"  smooth={true} duration={500}>
          Contact
        </Link>
            </li>
        </ul>
     


       {/* hamburger*/}

       <div onClick ={handleClick} className='md:hidden z-10 left-50]'>
       {!nav ? <FaBars className='text-xl dark:font-bold dark:text-white text-black'/> : <FaTimes className='text-2xl dark:text-white'/>}
       </div>

       {/* mobile menu */}
       <ul
        className={` fixed  right-1 py-2 items-center justify-center ${
          nav ? 'top-14 right-1 ease-out transition-all' : ' ease-in-out transition-all top-14 right-[-15%]'
        } max-w-[12%] h-[40%] bg-gradient-to-b grid grid-cols-1 from-blue-300 to-teal-500 rounded-full shadow-lg text-white dark:bg-gradient-to-b  dark:from-gray-400 dark:to-blue-400 dark:text-white`}
      >
       
            <li className= 'flex items-center justify-center text-1xl' >
            <Link onClick={handleClick} to="home"  smooth={true} duration={600}>
            <svg className='fill-gray-100'xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/> <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> </svg>
        </Link>
            </li>
            <li className=' flex items-center justify-center'>
            <Link onClick={handleClick}  to="about"  smooth={true} duration={600}>
            <svg className='fill-gray-100'xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-person" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/> </svg>

        </Link>
            </li>
            <li className='flex items-center justify-center'>
            <Link onClick={handleClick}  to="skills"  smooth={true} duration={600}>
            <svg className=' fill-gray-100'xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-braces" viewBox="0 0 16 16"> <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"/> </svg>

        </Link>
            </li>
            <li className='flex items-center justify-center'>
            <Link  onClick={handleClick} to="contact"  smooth={true} duration={600}>
            <svg className=' fill-gray-100'fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="16" height="16"viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>

        </Link>
            </li>

           
        
       </ul>




       {/* social icons */}

       <div className='hidden lg:flex fixed flex-col top-[35%] lg:bg-transparent left-0'>
        <ul>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-xl'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/alex-glocknitzer-5605a5190/">Linked In <FaLinkedin size ={30}/></a>
            </li>
             <Link onClick={handleScroll} to="contact" smooth={true} duration={500}>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 rounded-xl'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/"
                >Mail <HiOutlineMail size ={30}/></a>
            </li>
             </Link>
           

        </ul>

       </div>
       
    </div>
  )
}

export default Navbar