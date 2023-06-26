import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-mrk-darkblue bg-opacity-70 ">
        <nav className="flex justify-between items-center container mx-auto">
          <a href="/">
            <Image
              src={"/itgs/logo.svg"}
              alt="logo"
              width={62.492}
              height={47.08}
            />
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
              <a href="/about">About</a>
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
