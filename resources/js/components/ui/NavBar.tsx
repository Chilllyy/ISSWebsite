import NavItem from "@/components/ui/NavItem";
import ThemeSwitcher from "../ThemeSwitcher";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";
const Navbar = ({children}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="h-full">
            <nav className={`flex h-48 primary primary-text overflow-visible transition-all duration-300 ease-in-out ${menuOpen ? 'h-128' : ''}`}>
                <BackgroundBeamsWithCollision>
                <a className={`flex h-32 md:h-full w-full md:items-center ${menuOpen ? 'hidden' : ''}`} href={route('home')}>
                    <img className="h-1/2 md:h-full [image-rendering:pixelated] aspect-square" src="images/spaceman.png" alt="Spaceman Logo" />
                    <div className="font-extrabold text-2xl md:text-5xl px-10"><p>ISS Urine Tank Display</p></div>
                </a>
                <div className="flex absolute top-16 right-4 md:hidden cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes className="h-8 w-8" /> : <FaBars className="h-8 w-8" />}
                </div>
                <ul className={`flex flex-col md:flex-row scale-125 top-64 md:scale-100 absolute md:static gap-3 md:gap-0 h-32 w-full justify-end items-center ${menuOpen ? "" : "hidden md:flex"}`}>
                    <li className="pr-5 mx-2 transform duration-300 ease-in-out hover:scale-110"><a href="https://github.com/Chilllyy"><FaGithub className="h-12 w-12" /></a></li>
                    <li className="pr-5 mx-2"><ThemeSwitcher /></li>
                </ul>
                </BackgroundBeamsWithCollision>
            </nav>
            {children}
        </div>
    );
};

export default Navbar;