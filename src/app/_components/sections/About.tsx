import Image from "next/image";

import PrimaryButton from "../PrimaryButton";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="flex flex-col">
        {/* Office Image */}
        <div className="bg-office bg-cover bg-bottom h-[51.2rem] w-full"></div>

        {/* About */}
        <div className="container mx-auto">
          <div className="flex flex-col gap-12 mt-8">
            <h1 className="text-[5.2rem] font-extrabold text-white ">
              About Iteration Global Solutions
              <hr className="w-1/12 border-2" />
            </h1>

            <p className="text-white text-[1.8rem]">
              <strong>ITeration Global Solutions</strong> is a leading provider
              of innovative and comprehensive IT solutions, specializing in
              website development, mobile application development, and graphics
              design/multimedia.
            </p>

            <p className="text-white text-[1.8rem]">
              With a team of highly <strong>skilled professionals</strong>, we
              are dedicated to delivering exceptional services that cater to the
              unique needs and objectives of our clients.
            </p>

            <div>
              <PrimaryButton
                url="#our-company"
                size="1.8rem"
                color="mrk-darkblue"
                bg="white"
              >
                Learn More
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
