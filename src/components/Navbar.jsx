import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-16 py-6 text-white border-b border-b-gray-700 bg-black/70 backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="text-3xl font-semibold text-transparent transition-all duration-300 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text opacity-80 hover:opacity-100"
      >
        Abdelouahid
      </a>

      <ul className="hidden gap-10 md:flex">
        <a
          href="#home"
          className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="hidden gap-5 md:flex">
        <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-blue-500 hover:opacity-100">
          <a href="https://www.linkedin.com/in/abdelouahid-essarti/">
            <BsLinkedin />
          </a>
        </li>
        <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-orange-500 hover:opacity-100">
          <a href="https://github.com/AbdelSRT">
            <BsGithub />
          </a>
        </li>
      </ul>
      {isOpen ? (
        <BiX
          className="block text-4xl cursor-pointer md:hidden"
          onClick={menuOpen}
        />
      ) : (
        <BiMenu
          className="block text-4xl cursor-pointer md:hidden"
          onClick={menuOpen}
        />
      )}

      {isOpen && (
        <div
          className={`md:hidden fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="#projects"
              className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-blue-500 hover:opacity-100">
              <a href="https://www.linkedin.com/in/abdelouahid-essarti/">
                <BsLinkedin />
              </a>
            </li>
            <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-orange-500 hover:opacity-100">
              <a href="https://github.com/AbdelSRT">
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
