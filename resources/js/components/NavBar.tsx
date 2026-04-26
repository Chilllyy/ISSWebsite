import NavItem from "./NavItem";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-end border h-48">
                <ul className="flex">
                    <NavItem href="" label="Home" />      
                    <NavItem href="" label="Mods" />
                    <NavItem href="" label="FAQ" />
                    <NavItem href="" label="Contact" />
                    <NavItem href="https://github.com/Chilllyy" label="Github" />
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;