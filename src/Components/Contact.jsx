import React from 'react'


const Contact = () => {
    
  return (
    <div name ='contact'className='w-full h-screen text-black bg-gradient-to-b from-blue-200 to-gray-200 dark:bg-gradient-to-b dark:from-teal-500 dark:to-blue-800 flex justify-center items-center p-4'>
    <form method ="POST"action="https://getform.io/f/abff0ede-b586-462c-902e-14ed0318b82e" className='flex flex-col max-w-[600px] w-full text-center'>
        <div className='pb-8'>
            <p className='dark:text-white md:text-4xl text-2xl inline font-bold '>Contact</p>
            <p className='dark:text-white md:text-2xl text-1xl py-4'>Submit the form below</p>
        </div>
        <input className='p-2 rounded-xl' type="text" placeholder='Name' name='name' required/>
        <input className='my-4 p-2  rounded-xl'type="email" placeholder='Email' name='email' required/>
        <textarea className='p-2 rounded-xl' name ="message" placeholder='Message' rows="10" required></textarea>
        <button className=' text-black border-2 dark:bg-gray-400 dark:border-white hover:dark:bg-teal-400 dark:text-white border-blue-600 hover:shadow-md shadow-white bg-gray-400 hover:border-blue-200 hover:bg-blue-500 px-4 py-2 my-5 mx-auto rounded-xl flex items-center'>Let's Talk</button>

    </form>

    



    </div>


  )
}

export default Contact