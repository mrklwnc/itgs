import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      <div className="container mx-auto">
        {/* Links */}
        <div className="flex justify-between gap-[7.3rem] my-[8rem] text-white">
          <div>
            <Image
              src={"/itgs/logo.svg"}
              alt="logo"
              width={62.492}
              height={47.08}
            />
          </div>

          {/* Services */}
          {/* <Link href="/#services"> */}
          <div className="flex flex-col">
            <p className="inline-flex text-[2.4rem] items-center gap-2">
              Services{" "}
              <Image
                src={"/itgs/elements/icons/settings.svg"}
                alt="services"
                width={30}
                height={30}
              />
            </p>

            <ul className="flex flex-col gap-2 text-[1.6rem] font-thin opacity-70">
              <li>
                <NavItem url="/#services">Mobile App Development</NavItem>
              </li>
              <li>
                <NavItem url="/#services">Web App Development</NavItem>
              </li>
              <li>
                <NavItem url="/#services">Graphics and Multimedia</NavItem>
              </li>
            </ul>
          </div>
          {/* </Link> */}

          {/* Support */}
          <div className="flex flex-col">
            <p className="inline-flex text-[2.4rem] items-center gap-2">
              Support{" "}
              <Image
                src={"/itgs/elements/icons/support.svg"}
                alt="support"
                width={30}
                height={30}
              />
            </p>

            <ul className="flex flex-col gap-2 text-[1.6rem] font-thin opacity-70">
              <li>
                <NavItem url="/contact">Contact Us</NavItem>
              </li>
              <li>
                <NavItem url="/#">Terms of Service</NavItem>
              </li>
              <li>
                <NavItem url="/#">Privacy Policy</NavItem>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <p className="inline-flex text-[2.4rem] items-center gap-2">
              Company{" "}
              <Image
                src={"/itgs/elements/icons/building.svg"}
                alt="company"
                width={30}
                height={30}
              />
            </p>

            <ul className="flex flex-col gap-2 text-[1.6rem] font-thin opacity-70">
              <li>
                <NavItem url="/about">About Us</NavItem>
              </li>
              <li>
                <NavItem url="/#team">Our Team</NavItem>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <p className="inline-flex text-[2.4rem] items-center gap-2">
              Address{" "}
              <Image
                src={"/itgs/elements/icons/pinpoint.svg"}
                alt="address"
                width={30}
                height={30}
              />
            </p>

            <ul className="text-[1.6rem] font-thin opacity-70">
              <li>1234 Tech Street, Makati City, Metro Manila, Philippines</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 flex-col justify-center items-center bg-mrk-darkblue py-7">
        <div className="flex gap-7">
          <Link href="https://www.linkedin.com/in/mark-lewence-endrano/">
            <Image
              src="/itgs/elements/icons/linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
          </Link>
          <Link href="https://www.facebook.com/endranolewence/">
            <Image
              src="/itgs/elements/icons/facebook.svg"
              alt="facebook"
              width={30}
              height={30}
            />
          </Link>

          <Link href="https://github.com/mrklwnc">
            <Image
              src="/itgs/elements/icons/twitter.svg"
              alt="twitter"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <p className="text-white text-[1.6rem]">
          © ITeration Global Solutions 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
