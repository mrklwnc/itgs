import Image from "next/image";
import dashedline from "../itgs/elements/dashed-tools.svg";
import figma from "../itgs/tools/figma.svg";
import nextjs from "../itgs/tools/nextjs.svg";
import laravel from "../itgs/tools/laravel.svg";
import flutter from "../itgs/tools/flutter.svg";
import tailwindcss from "../itgs/tools/tailwindcss.svg";
import mysql from "../itgs/tools/mysql.svg";
import premierpro from "../itgs/tools/premierpro.svg";

const ToolsSection = () => {
  return (
    <section className="relative flex items-center h-[35rem]">
      {/* Container Div */}
      <div className="container mx-auto bg-opacity-70 px-24 py-16 bg-mrk-shipcove rounded-xl flex flex-col gap-4 z-10">
        <p className="flex justify-center text-white text-[1.8rem] font-bold uppercase italic">
          Our Tools
        </p>

        <div className="flex justify-between">
          <Image src={figma} alt="figma" />
          <Image src={nextjs} alt="nextjs" />
          <Image src={laravel} alt="laravel" />
          <Image src={flutter} alt="flutter" />
          <Image src={tailwindcss} alt="tailwindcss" />
          <Image src={mysql} alt="mysql" />
          <Image src={premierpro} alt="premierpro" />
        </div>
      </div>

      {/* Dashed Line Image */}
      <Image
        src={dashedline}
        alt="dashed-tools"
        className="absolute w-full z-0"
      />
    </section>
  );
};

export default ToolsSection;
