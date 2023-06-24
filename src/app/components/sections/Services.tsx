import Image from "next/image";
import Link from "next/link";

import ServicesCard from "../ServicesCard";
import mobile from "../itgs/devices/mobile-app.svg";
import web from "../itgs/devices/web-app.svg";
import multimedia from "../itgs/devices/multimedia.svg";
import rockyBorder from "../itgs/elements/rocky-border.svg";
import PrimaryButton from "../PrimaryButton";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center bg-white"
    >
      <div className="container mx-auto w-auto">
        <div className="flex gap-10 text-mrk-darkblue">
          {/* Cards */}
          <div className="grid grid-rows-2 grid-flow-col gap-6">
            <ServicesCard span={"row-span-2"} count={"1"}>
              <Image src={mobile} alt="mobile-app" />
            </ServicesCard>
            <ServicesCard span={"row-span-1"} count={"2"}>
              <Image src={web} alt="web-app" />
            </ServicesCard>
            <ServicesCard span={"row-span-1"} count={"3"}>
              <Image src={multimedia} alt="multimedia" />
            </ServicesCard>
          </div>
          <div className="w-[56.5rem]">
            <h1 className="text-[5.2rem] font-extrabold relative ">
              Our Services
              <hr className="w-4/12 border-2 border-mrk-darkblue" />
            </h1>

            <p className="text-[2.2rem] font-light mt-8 mb-8">
              We ensure that we produce quality and premium service and products
            </p>

            <ul className="list-disc leading-loose ml-12 mb-12 text-[1.8rem]">
              <li>Mobile Application Development</li>
              <li>Web Application Development</li>
              <li>Graphics and Multimedia</li>
            </ul>

            <PrimaryButton
              url="/contact"
              color="white"
              size="1.8rem"
              bg="mrk-shipcove"
            >
              Tell us what you need
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* <Image
        src={rockyBorder}
        alt="border"
        className="absolute top-0 right-0 w-[330px]"
        layout="fill"
        objectFit="contain"
      /> */}
    </section>
  );
};

export default ServicesSection;
