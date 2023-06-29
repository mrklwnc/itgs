"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "../libs/useScroll";
import NavItem from "./NavItem";

const Navbar = () => {
  // Hide on Scroll Down
  const { scrollY, scrollX, scrollDirection } = useScroll();

  interface AnimationStyles {
    visibility: Visibility;
    transition: string;
    opacity: string;
    transform?: string;
  }

  const styles: {
    active: AnimationStyles;
    hidden: AnimationStyles;
  } = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
      opacity: "1",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
      opacity: "0",
    },
  };

  return (
    <header
      className="fixed top-0 w-full z-50"
      style={scrollDirection === "down" ? styles.active : styles.hidden}
    >
      <div className="bg-mrk-darkblue bg-opacity-70 ">
        <nav className="flex justify-between items-center container mx-auto transition-all duration-[350] ease-in">
          <Link href="/#">
            <Image
              src={"/itgs/logo.svg"}
              alt="logo"
              width={62.492}
              height={47.08}
            />
          </Link>
          <ul className="uppercase flex gap-[5.2rem] text-white text-[1.6rem] py-[3rem]">
            <li>
              <NavItem url="/">Home</NavItem>
            </li>
            <li>
              <NavItem url="/#services">Services</NavItem>
            </li>
            <li>
              <NavItem url="/about">About</NavItem>
            </li>
            <li>
              <NavItem url="/contact">Contact Us</NavItem>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
