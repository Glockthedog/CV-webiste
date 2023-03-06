import React from 'react'
import HTML from '../Assets/html.png'
import REACT from '../Assets/react.png'
import TAILWIND from '../Assets/tailwind.png'
import CSS from '../Assets/css.png'
import JAVASCRIPT from '../Assets/javascript.png'
import BOOTSTRAP from '../Assets/bootstrap.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-b from-gray-200 to-blue-200 dark:bg-gradient-to-b dark:from-blue-800 dark:to-teal-500 text-white'>
        {/*container */}
     <div className='max-w-[1000px] lg:max-w-[800px] p-6 mx-auto flex flex-col justify-center text-center w-full h-full'>
        <div className='sm:mx-auto pb-16'>
            <p className='dark:text-white md:text-4xl text-black text-2xl font-bold inline'>Skills</p>
            
        </div>
     <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-5'>
      <div className='rounded-xl bg-orange-100 dark:bg-transparent shadow-lg shadow-orange-500 dark:shadow-lg dark:shadow-orange-400 hover:scale-110 duration-500 '>
        <img className='w-20 mx-auto py-2'src={HTML} alt="html logo " />
        <p className='text-black dark:text-white'>HTML</p>
      </div>
      <div className='rounded-xl dark:bg-transparent bg-blue-200 shadow-lg shadow-blue-500 dark:shadow-lg dark:shadow-blue-400 hover:scale-110 duration-500 '>
        <img className='w-20 mx-auto py-2'src={CSS} alt="html logo " />
        <p className='text-black dark:text-white'>CSS</p>
      </div>
      <div className='rounded-xl  shadow-lg dark:bg-transparent bg-teal-100 shadow-teal-500 dark:shadow-lg dark:shadow-teal-300 hover:scale-110 duration-500 '>
        <img className='w-20 mx-auto py-2'src={TAILWIND} alt="html logo " />
        <p className='text-black dark:text-white'>TAILWIND</p>
      </div>
      <div className=' rounded-xl  shadow-lg shadow-yellow-500 dark:bg-transparent bg-yellow-100 dark:shadow-lg dark:shadow-yellow-400 hover:scale-110 duration-500 '>
        <img className='w-20 mx-auto py-2'src={JAVASCRIPT} alt="html logo " />
        <p className='text-black dark:text-white'>JAVASCRIPT</p>
      </div>
      <div className=' rounded-xl shadow-lg shadow-blue-500 dark:bg-transparent bg-blue-100 dark:shadow-lg dark:shadow-blue-200 hover:scale-110 duration-500 '>
        <img className='w-20 mx-auto py-2'src={REACT} alt="html logo " />
        <p className='text-black dark:text-white'>REACT</p>
      </div>
      <div className=' rounded-xl shadow-lg shadow-purple-500 dark:shadow-l dark:bg-transparent bg-purple-100 dark:shadow-purple-300 hover:scale-110 duration-500 '>
        <img className='w-20 mx-auto py-2'src={BOOTSTRAP} alt="html logo " />
        <p className='text-black dark:text-white'>Bootstrap</p>
      </div>
     </div>
     </div>
    
    <div>
       
    </div>
    
    
    </div>
  )
}

export default Skills