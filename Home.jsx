import { React, useEffect} from "react";
import ME from "../Assets/me4.png";
import Typewriter from 'typewriter-effect';

// new Typewriter ('#typewriter',{
//   strings:['Hello'],
//   autoStart:true,
// });

const Home = () => {
  useEffect(()=>{
    const html = document.querySelector("html");
    html.classList.add("dark");

  }, [])
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
          
        <div className="bg-gradient-to-b to-blue-400 from-gray-300 mx-auto rounded-t-full shadow-lg shadow-blue-500 dark:shadow-md dark:shadow-gray-200  dark:bg-gradient-to-b dark:from-blue-300 dark:to-teal-600 overflow-hidden w-60 h-50">
          <img className=" mt-4" alt="/" src={ME}></img>
          <h2 className="text-[#232323] text-lg md:text-xl text-center pt-2 dark:text-white">
            {" "}
            Junior Front End Engineer{" "}
          </h2>
        </div>
        <div>
          <h2 className="text-lg flex md:text-3xl md:mt-6 text-[#232323] dark:text-white">
            Working with:  <span className="ml-2 dark:text-teal-300 dark:font-bold text-blue-800 font-bold"><Typewriter className='dark:text-red-300' options={{
              strings:['HTML','CSS','JAVASCRIPT','REACT','TAILWIND'],
              autoStart:true,
              loop:true,
              deleteSpeed:'natural'
            }}
            />
            </span>
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
      </div>
    </div>
  );
};

export default Home;
