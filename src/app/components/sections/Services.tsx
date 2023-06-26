import Image from "next/image";
import Link from "next/link";

import ServicesCard from "../ServicesCard";
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
              <Image
                src={"/itgs/devices/mobile-app.svg"}
                alt="mobile-app"
                width={276}
                height={380}
              />
            </ServicesCard>
            <ServicesCard span={"row-span-1"} count={"2"}>
              <Image
                src={"/itgs/devices/web-app.svg"}
                alt="web-app"
                width={200}
                height={170}
              />
            </ServicesCard>
            <ServicesCard span={"row-span-1"} count={"3"}>
              <Image
                src={"/itgs/devices/multimedia.svg"}
                alt="multimedia"
                width={234}
                height={169}
              />
            </ServicesCard>
          </div>
          <div className="w-[56.5rem]">
            <h1 className="text-[4rem] font-extrabold relative ">
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
