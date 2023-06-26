import Image from "next/image";
const MissionAndVisionSection = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto">
        {/* Content */}
        <div className="min-h-[65rem]">
          <h3 className="text-[4rem] font-bold text-white ">
            Our Mission & Vision
            <hr className="w-1/12 border-2 border-white" />
          </h3>

          <div className="flex h-[65rem] mt-10">
            {/* Rocket */}
            <div className="w-4/12 bg-rocketship bg-contain bg-no-repeat bg-center bg-mrk-shipcove rounded-l-xl"></div>

            {/* Mission and Vision */}
            <div className="relative w-8/12 bg-white rounded-r-xl">
              {/* Mission - Flag */}
              <Image
                src="/itgs/elements/icons/Flag.svg"
                alt="mission"
                width={258.358}
                height={332.208}
                className="absolute transform rotate-[-160] top-10 right-10"
              />

              {/* Vision - Lightbulb */}
              <Image
                src="/itgs/elements/icons/Lightbulb.svg"
                alt="mission"
                width={258.358}
                height={332.208}
                className="absolute bottom-10 left-10"
              />

              <div className="h-3/6 flex gap-4 ">
                <div className="w-8/12 flex flex-col justify-center items-center gap-4">
                  <h5 className="font-extrabold text-[3.2rem] text-mrk-darkblue">
                    Mission
                  </h5>
                  <p className="text-mrk-chambray text-[1.8rem] font-light text-center px-12">
                    Empowering businesses and individuals with innovative
                    technology solutions for growth and success.
                  </p>
                </div>
              </div>

              <div className="h-3/6 flex justify-end gap-4">
                <div className="w-8/12 flex flex-col justify-center items-center gap-4">
                  <h5 className="font-extrabold text-[3.2rem] text-mrk-darkblue">
                    Vision
                  </h5>
                  <p className="text-mrk-chambray text-[1.8rem] font-light text-center px-12">
                    Global leaders in transformative IT solutions, empowering
                    businesses to thrive in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVisionSection;
