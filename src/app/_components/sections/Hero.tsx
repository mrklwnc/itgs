import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const HeroSection = () => {
  return (
    <main
      id="hero"
      className="relative min-h-screen flex items-center lg:bg-products lg:bg-large xl:bg-auto lg:bg-no-repeat lg:bg-right-bottom"
    >
      <div className="container mx-auto">
        <div className="w-[47rem] text-white">
          <h1 className="text-[5.2rem] font-extrabold ">
            Iteration Global Solutions
            <hr className="w-4/12 border-2" />
          </h1>

          <p className="text-[1.8rem] mt-8 mb-10">
            Transforming Ideas into Digital Reality
          </p>
          <div className="flex items-center gap-10">
            <PrimaryButton
              url="#services"
              size="1.8rem"
              color="mrk-darkblue"
              bg="white"
            >
              Get Started
            </PrimaryButton>
            <SecondaryButton url="/contact" size="1.8rem">
              Get in touch
            </SecondaryButton>
          </div>
        </div>
      </div>

      {/* <Image
        src={"/itgs/devices/hero-section.svg"}
        alt="devices"
        width={1145}
        height={683}
        className="absolute bottom-0 right-0"
      /> */}
    </main>
  );
};

export default HeroSection;
