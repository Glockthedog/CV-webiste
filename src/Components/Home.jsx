import { React, useEffect } from "react";
// import Typed from "react-typed";
import ME from "../Assets/me4.png";
const Home = () => {
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.add("dark");
  }, []);

  return (
    <div
      name="home"
      className="w-full h-screen bg-opacity-90 bg-gradient-to-b from-gray-200 to-blue-200 bg-gray-100 dark:bg-gradient-to-b dark:to-teal-500 dark:from-blue-800"
    >
      {/*container */}

      <div className="max-w-[1000px] mx-auto px-6 pb-16 md:py-4 flex flex-col justify-center gap-4 items-center h-full">
        <p className="text-[#232323] text-2xl md:text-4xl lg:text-4xl dark:text-white">
          Hi there! I'm{" "}
          <span className="text-blue-800 font-bold dark:font-bold dark:text-teal-300">
            Alex
          </span>{" "}
        </p>

        <div className="bg-gradient-to-b to-blue-400 from-gray-300 mx-auto rounded-t-full shadow-lg shadow-blue-500 dark:shadow-lg dark:shadow-gray-400  dark:bg-gradient-to-b dark:from-blue-300 dark:to-teal-600 overflow-hidden w-60 h-50">
          <img className=" mt-4" alt="/" src={ME}></img>
          <h2 className="text-[#232323] text-lg md:text-xl text-center pt-2 dark:text-white">
            {" "}
            Junior Front End Engineer{" "}
          </h2>
        </div>
        <div>
          <h2 className="text-lg md:text-3xl md:mt-6 text-[#232323] dark:text-white">
            Working with:
            <span>
              {/* <Typed
                className="text-blue-800 ml-2 font-bold dark:font-bold dark:text-teal-300"
                strings={[
                  "HTML",
                  "CSS",
                  "JAVASCRIPT",
                  "REACT",
                  "TAILWIND",
                  "BOOTSTRAP",
                ]}
                typeSpeed={130}
                backSpeed={80}
                showCursor={false}
                loop
              /> */}
            </span>
          </h2>
        </div>

        {/* <div>
        <button className='bg-gradient-to-b dark:shadow-white to-teal-300 border-black shadow-lg shadow-gray-200 dark:border-white from-blue-500 dark:text-white text-black-200 border-2 border-gray mx-auto sm:mx-1 dark:bg-gradient-to-b dark:from-teal-200 dark:to-blue-600 group py-2 px-2 rounded-xl my-3 flex items-center dark:hover:bg-[#20d892] dark:hover:border-[#21e499]'
        ><a href="AlexGlocknitzerCV.pdf" download>Download CV</a>
        <span className=''><HiArrowNarrowDown className='ml-2' /></span>
        </button>
    </div> */}
      </div>
    </div>
  );
};

export default Home;
