// src/components/Sidebar.tsx
import Link from "next/link";
import "@/component/Sidebar.css";
import {
  FaHome,
  FaUser,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside
      className="fixed bottom-0 left-0 w-full h-16 bg-white text-black flex justify-around items-center shadow-inner 
    lg:flex-col lg:justify-start lg:items-start lg:h-screen lg:w-64 lg:top-0 lg:bottom-auto 
    lg:pl-[11rem] lg:pt-10 lg:shadow-none"
    >
      <nav
        className="flex w-full  lg:justify-start  justify-around 
  lg:flex-col lg:items-center lg:h-[95vh] lg:gap-12 
  lg:rounded-[18px] lg:bg-[#f0f2f5] lg:text-black 
  lg:shadow-[5px_5px_10px_#d1d9e6,_-5px_-5px_10px_#ffffff] lg:pt-[15px]"
      >
        <Link
          href="/"
          className="hover:text-blue-400 flex items-center gap-2 
        lg:rounded-[17px] lg:p-[3px] lg:shadow-[5px_5px_10px_#d1d9e6,_-5px_-5px_10px_#fff] text-base"
        >
          <FaHome />
        </Link>

        <Link
          href="/Home"
          className="hover:text-blue-400 flex items-center gap-2 
        lg:rounded-[17px] lg:p-[3px] lg:shadow-[5px_5px_10px_#d1d9e6,_-5px_-5px_10px_#fff] text-base"
        >
          <HiOutlineViewGrid />
        </Link>

        <Link
          href="/resume"
          className="hover:text-blue-400 flex items-center gap-2 
        lg:rounded-[17px] lg:p-[3px] lg:shadow-[5px_5px_10px_#d1d9e6,_-5px_-5px_10px_#fff] text-base"
        >
          <FaFileAlt />
        </Link>

        <Link
          href="/about"
          className="hover:text-blue-400 flex items-center gap-2 
        lg:rounded-[17px] lg:p-[3px] lg:shadow-[5px_5px_10px_#d1d9e6,_-5px_-5px_10px_#fff] text-base"
        >
          <FaUser />
        </Link>

        <a
          href="https://github.com/your-username"
          target="_blank"
          className="hover:text-blue-400 flex items-center gap-2 
        lg:rounded-[17px] lg:p-[3px] lg:shadow-[5px_5px_10px_#d1d9e6,_-5px_-5px_10px_#fff] text-base"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          className="hover:text-blue-400 flex items-center gap-2 
        lg:rounded-[17px] lg:p-[3px] lg:shadow-[5px_5px_10px_#d1d9e6,_-5px_-5px_10px_#fff] text-base"
        >
          <FaLinkedin />
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
