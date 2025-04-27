import { FaArrowDown } from "react-icons/fa";
import {X, Check} from "lucide-react";

function ProfileCard() {
    const handleDown = () => {
        window.scrollBy({
          top: window.innerHeight * 0.6, // Scrolls down by one screen height
          behavior: "smooth",
        });
    };

  return (
      <div className="flex flex-col justify-start items-start px-10 md:px-20 lg:px-24 text-white mt-20 md:mt-28 mb-16">

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-mono leading-tight md:leading-none mb-6">
              Who is this, <br/> Guy?
          </h1>

          <div className="text-lg space-y-3">
              <div>
          <span role="img" aria-label="wave">
            👋 My name is{" "}
              <span className="text-2xl font-bold tracking-wide text-slate-300">
              Jhaneswar
            </span>.
          </span>
              </div>
              <p className="relative ml-4 md:ml-8 font-mono w-full text-base md:text-lg">
                  I'm a Web Engineer, and it's lovely to meet you.<br/>
                  Check out my
                  <span className="relative text-2xl md:text-4xl px-2 md:px-4 inline-block py-4">
                      work
                      <X className="absolute top-0 left-1/2 -translate-x-1/2 h-20 w-20 text-red-500 opacity-65"/>
                   </span> below.
              </p>
              <p className="flex items-center justify-center gap-2 text-lg md:text-xl font-semibold ">
                  Projects <Check className="h-8 w-8 text-green-500"/>
              </p>
          </div>
          {/* Arrow Icon */}
          <div
              className="flex items-center justify-center w-full h-20 mt-8 animate-bounce cursor-pointer"
              onClick={handleDown}
          >
              <FaArrowDown size={30}/>
          </div>


      </div>
  );
}

export default ProfileCard;
