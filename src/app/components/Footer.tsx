import Image from "next/image";
import Link from "next/link";

import logo from "./itgs/logo.svg";
import settings from "./itgs/elements/icons/settings.svg";
import support from "./itgs/elements/icons/support.svg";
import company from "./itgs/elements/icons/building.svg";
import address from "./itgs/elements/icons/pinpoint.svg";

import linkedin from "./itgs/elements/icons/linkedin.svg";
import facebook from "./itgs/elements/icons/facebook.svg";
import twitter from "./itgs/elements/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      <div className="container mx-auto">
        {/* Links */}
        <div className="flex justify-between gap-[7.3rem] my-[8rem] text-white">
          <Image src={logo} alt="logo" />

          {/* Services */}
          <Link href="#services">
            <div className="flex flex-col">
              <p className="inline-flex text-[2.4rem] items-center gap-2">
                Services <Image src={settings} alt="services" />
              </p>

              <ul className="text-[1.6rem] font-thin opacity-70">
                <li>Mobile App Development</li>
                <li>Web App Development</li>
                <li>Graphics and Multimedia</li>
              </ul>
            </div>
          </Link>

          {/* Support */}
          <div className="flex flex-col">
            <p className="inline-flex text-[2.4rem] items-center gap-2">
              Support <Image src={support} alt="support" />
            </p>

            <ul className="text-[1.6rem] font-thin opacity-70">
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <p className="inline-flex text-[2.4rem] items-center gap-2">
              Company <Image src={company} alt="company" />
            </p>

            <ul className="text-[1.6rem] font-thin opacity-70">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="#team">Our Team</Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <p className="inline-flex text-[2.4rem] items-center gap-2">
              Address <Image src={address} alt="address" />
            </p>

            <ul className="text-[1.6rem] font-thin opacity-70">
              <li>1234 Tech Street, Makati City, Metro Manila, Philippines</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 flex-col justify-center items-center bg-mrk-darkblue py-7">
        <div className="flex gap-7">
          <Image src={linkedin} alt="linkedin" />
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
        </div>
        <p className="text-white text-[1.8rem]">© Company Name 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
