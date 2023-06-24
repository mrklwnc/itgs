import Image from "next/image";
import Link from "next/link";

import logo from "./itgs/logo.svg";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-mrk-darkblue bg-opacity-70 ">
        <nav className="flex justify-between items-center container mx-auto">
          <a href="/">
            <Image src={logo} alt="logo" />
          </a>
          <ul className="uppercase flex gap-[5.2rem] text-white text-[1.6rem] py-[3rem]">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
