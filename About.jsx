import { React, useState, useEffect} from "react";
import {BiArrowFromBottom} from 'react-icons/bi'

const About = () => {
const  [isVisible, setIsVisible] = useState(false);

const toggleVisibility = () => {
    if (window.scrollY > 500){
        setIsVisible(true);
    } else {
        setIsVisible(false)
    }
}

const scrollToTop = () =>{
    window.scrollTo({top:0, behavior:"smooth"})
}

useEffect (()=>{
window.addEventListener('scroll', toggleVisibility);
return () =>{
    window.removeEventListener('scroll', toggleVisibility);

}

},[]);


  return (
    <div
      name="about"
      className="w-full h-screen lg:h-auto  lg:items-center  lg: bg-gradient-to-b from-blue-200 to-gray-200  dark:bg-gradient-to-b dark:from-teal-500 dark:to-blue-800  items-center text-black dark:text-white "
    >
      <div className="flex flex-col lg:w-auto py-10 w-full h-full">
        <div className="w-full sm:text-center sm:gap-8  grid text-center gap-8">
          <div className=" py-10 pl-2">
            <p className="md:text-center md:text-4xl text-2xl sm:text-3xl  sm:flex sm:justify-center font-bold inline ">
              About
            </p>
          </div>
        </div>
        <div className={`fixed bottom-2 right-4 ${isVisible? 'opacity-200 cursor-pointer inline-flex items-center p-2 text-2xl rounded-full shadow-sm text-white bg-blue-300 transition-opacity focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-black': 'opacity-0'}`} onClick={scrollToTop}>
     
          <BiArrowFromBottom  />
         </div>
        <div className="max-w-[2000px] lg:items-center lg:h-screen lg:justify-center md:flex w-full sm:text-2xl grid gap-8 px-6">
          <ul class=" border-l w-[90%] lg:border-none mt-8 border-black dark:border-white">
            <li class="mb-10 lg:border-l border-black dark:border-white ml-6">
              <span class="absolute lg:relative lg:left-[-53px] lg:top-0 flex ml-6 items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-blue-800 dark:text-blue-300 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="lg:text-3xl flex items-center mb-1 text-md font-semibold text-blue-800 dark:text-teal-300">
                Scoala Informala de IT{" "}
                <span class="bg-blue-300 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                  Latest
                </span>{" "}
              </h3>
              <time class="md:text-md lg:text-2xl block mb-2 text-sm font-normal leading-none text-gray-800 dark:text-gray-200">
                Started October 2022
              </time>
              <p class="md:text-2xl sm:w-auto lg:w-[80%] lg:text-3xl mb-4 text-base font-normal  text-gray-600 dark:text-gray-200">
                {" "}
                I am a web development enthusiast who has been pursuing a career
                in this field for the past 5-6 months. During this time, I have
                been enrolled at Scoala Informala de IT, where I have gained
                valuable knowledge and skills in developing modern and
                responsive websites.
              </p>
              <a
                href="AlexGlocknitzerCV.pdf"
                download
                class="inline-flex items-center px-4 border-xl dark:border-white py-2 text-sm shadow-md dark:shadow-gray-200 shadow-blue-900 font6-bold   text-blue-700 bg-gray-400 border border-blue-900 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-teal-400 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  class="w-4 h-4 mr-2 animate-bounce"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clip-rule="evenodd"
                  >
                    {" "}
                  </path>
                </svg>{" "}
                Download CV
              </a>
            </li>

            <li class="mb-10 lg:border-l  dark:border-white border-black ml-6">
              <span class="absolute lg:relative lg:left-[-53px] lg:top-0 flex ml-6 items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-blue-800 sm:grid dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="mb-1 text-md lg:text-3xl font-semibold text-blue-800 dark:text-teal-300">
                International Gaming Operations{" "}
              </h3>
              <time class="block lg:text-2xl md:text-md mb-2 text-sm font-normal leading-none text-gray-800 dark:text-gray-200">
                Joined company November 2019
              </time>
              <p class="md:text-2xl lg:w-[80%] sm:w-auto  lg:text-3xl  text-base font-normal text-gray-600 dark:text-gray-200">
                I am an International Gaming Operations specialist. I manage
                promotional content and on-site placement for the gaming
                industry. I collaborate across regions and stay up-to-date with
                the latest industry trends.
              </p>
              <a
                href="https://www.linkedin.com/in/alex-glocknitzer-5605a5190/"
                download
                class="inline-flex border-xl dark:border-white border-blue-500 dark:shadow-gray-200 shadow-blue-900 shadow-md items-center  lg:hidden px-4 py-2 text-sm mt-4 font-medium  text-blue-700 bg-gray-400 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-teal-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                {" "}
                <svg
                  class="w-6 h-6  text-blue-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div></div>
      <div>
        {" "}
        {/* <ScrollToTop
            style={{
              height: "35px",
              padding: "6px",
              width: "35px",
              backgroundColor: "gray",
              borderRadius: "20px",
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              borderColor: "red",
              color: "black",
            }}
            top="800"
            color="white"
            smooth
          /> */}
        
      </div>
    </div>
  );
};

export default About;
