import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import sun from "../../public/sun.png";

function Nav() {
  return (
    // Nav Start

    <div className="Nav shadow-2xl ">
      {/* Logo */}
      <div className="NameShadow FlexCenter ml-4 min-h-[60px] m-0 text-center text-gray-300 font-bold text-xl">
        <Image className="animate-spin-slow mr-3 w-12" src={sun} alt="M Logo" />
        Oscillating<span className="ml-1 text-Redd"> Sun </span>
      </div>

      {/* Search Bar */}
      <div className=" lg:flex items-center justify-center Round h-full">
        <input
          className="hidden ClearDrop lg:w-3/4 w-1/4 Shadow bg-Logo bg-opacity-60 rounded-full p-2 text-sm font-light  text-white px-4"
          type="text"
        />
        <BiSearch className="hidden h-8 w-8 p-2 mx-4 cursor-pointer rounded-full bg-Purpp" />
      </div>

      {/* Icons */}
      <div className="FlexCenter h-full  text-2xl mr-4 text-Redd  space-x-4 ">
        <div className=" NavItem p-2">
          <a href="https://www.krisrehfuss.com">
            <AiOutlineHome />
          </a>
        </div>
        <div className=" NavItem p-2">
          <a href="https://neoweather.vercel.app">
            <BsSun className="hover:animate-spin-slow hover:text-Gold" />
          </a>
        </div>
        <div className=" NavItem p-2">
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Nav;
