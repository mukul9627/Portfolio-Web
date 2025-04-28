
// src/components/Sidebar.tsx
import Link from "next/link";
import '@/component/Sidebar.css'
import { FaHome, FaUser, FaGithub, FaLinkedin, FaFileAlt,FaTachometerAlt  } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 w-full h-16 bg-white text-black flex justify-around items-center lg:flex-col lg:justify-start lg:h-screen lg:w-64 lg:top-0 lg:bottom-auto p-4 space-y-0 lg:space-y-6 sidebar-aside shadow-inner lg:shadow-none">
      <nav className="flex w-full justify-around lg:flex-col lg:gap-4">
        <Link href="/" className="hover:text-blue-400 flex items-center gap-2 sidebar-link">
          <FaHome /> 
        </Link>
        <Link href="/Home" className="hover:text-blue-400 flex items-center gap-2 sidebar-link">
          <HiOutlineViewGrid />
        </Link>
        <Link href="/resume" className="hover:text-blue-400 flex items-center gap-2 sidebar-link">
          <FaFileAlt /> 
        </Link>
        <Link href="/about" className="hover:text-blue-400 flex items-center gap-2 sidebar-link">
          <FaUser /> 
        </Link>
        <a href="https://github.com/your-username" target="_blank" className="hover:text-blue-400 flex items-center gap-2 sidebar-link">
          <FaGithub /> 
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" className="hover:text-blue-400 flex items-center gap-2 sidebar-link">
          <FaLinkedin /> 
        </a>
      </nav>
    </aside>
  );
};


export default Sidebar;
