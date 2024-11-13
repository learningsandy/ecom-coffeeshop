import React from "react";
import { motion } from "framer-motion";
import { GiCoffeeBeans } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { IoSearch } from "react-icons/io5";
import { FadeLeft } from "../utility/animation";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },

  {
    id: 2,
    title: "About",
    link: "#",
  },

  {
    id: 3,
    title: "Products",
    link: "#",
  },

  {
    id: 4,
    title: "Contacts",
    link: "#",
  },

  {
    id: 5,
    title: <IoSearch />,
    link: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav>
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <GiCoffeeBeans color="#603F26" />
          <p className="text-style font-normal nav">Coffee Co.</p>
        </div>
        {/* Menu */}
        <div className="hidden md:block ml-80 md:ml-24 md:mt-2">
          <ul className=" flex w-fit rounded-full p-1 ">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block text-black py-3 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#603F26] font-semibold"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <motion.button
              variants={FadeLeft(0.4)}
              initial="hidden"
              animate="visible"
              className="primary-btn flex items-center"
            >
              Sign In
            </motion.button>
          </ul>
        </div>
        {/* Mobile Menu Hamburger*/}

        <div
          className="md:hidden bg-yellow-300 mobile"
          onClick={() => setOpen(!open)}
        >
          <MdMenu className="text-4xl" />
        </div>

        {/* Mobile Menu - View */}
        <div>
          <ResponsiveMenu open={open} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
