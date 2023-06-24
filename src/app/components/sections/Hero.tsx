import Image from "next/image";
import Link from "next/link";

import heroSection from "../itgs/devices/hero-section.svg";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const HeroSection = () => {
  return (
    <main className="relative min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="w-[470px] text-white">
          <h1 className="text-[5.2rem] font-extrabold relative ">
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

      <Image
        src={heroSection}
        alt="devices"
        className="absolute bottom-0 right-0"
      />
    </main>
  );
};

export default HeroSection;
