import NavItem from "./NavItem";
import ThemeSwitcher from "./ThemeSwitcher";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div>
            <nav className="flex h-48 bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-neutral-300">
                <BackgroundBeamsWithCollision>
                <div className="flex h-full w-full items-center">
                    <img className="h-full [image-rendering:pixelated] aspect-square" src="images/spaceman.png" alt="Spaceman Logo" />
                    <div className="font-extrabold text-5xl px-10 text-zinc-800 dark:text-amber-300"><p>ISS Urine Tank Display</p></div>
                </div>
                <ul className="flex h-32 w-full justify-end items-center">
                    <NavItem href="" label="Home" />      
                    <NavItem href="" label="Mods" />
                    <NavItem href="" label="FAQ" />
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