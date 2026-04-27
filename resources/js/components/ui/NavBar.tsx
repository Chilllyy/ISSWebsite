import NavItem from "@/components/ui/NavItem";
import ThemeSwitcher from "../ThemeSwitcher";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {

    return (
        <div>
            <nav className="flex h-48 primary primary-text">
                <BackgroundBeamsWithCollision>
                <a className="flex h-full w-full items-center" href={route('home')}>
                    <img className="h-full [image-rendering:pixelated] aspect-square" src="images/spaceman.png" alt="Spaceman Logo" />
                    <div className="font-extrabold text-5xl px-10"><p>ISS Urine Tank Display</p></div>
                </a>
                <ul className="flex h-32 w-full justify-end items-center">
                    <NavItem href={route('home')} label="Home" />      
                    <NavItem href="" label="Mods" />
                    <NavItem href={route('faq')} label="FAQ" />
                    <NavItem href="" label="Contact" />
                    <li className="pr-5 mx-2 transform duration-300 ease-in-out hover:scale-110"><a href="https://github.com/Chilllyy"><FaGithub className="h-12 w-12" /></a></li>
                    <li className="pr-5 mx-2"><ThemeSwitcher /></li>
                </ul>
                </BackgroundBeamsWithCollision>
            </nav>
        </div>
    );
};

export default Navbar;