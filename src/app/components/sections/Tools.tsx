import Image from "next/image";

const ToolsSection = () => {
  return (
    <section className="relative flex items-center h-[35rem] bg-dashedline bg-no-repeat bg-contain my-10">
      {/* Container Div */}
      <div className="container mx-auto bg-opacity-70 px-24 py-16 bg-mrk-shipcove  rounded-xl flex flex-col gap-4 z-10">
        <p className="flex justify-center text-white text-[2.4rem] font-bold uppercase italic">
          Our Tools
        </p>

        <div className="flex justify-between">
          <Image
            src={"/itgs/tools/figma.svg"}
            alt="figma"
            width={50}
            height={70}
          />
          <Image
            src={"/itgs/tools/nextjs.svg"}
            alt="nextjs"
            width={60}
            height={60}
          />
          <Image
            src={"/itgs/tools/laravel.svg"}
            alt="laravel"
            width={50}
            height={50}
          />
          <Image
            src={"/itgs/tools/flutter.svg"}
            alt="flutter"
            width={50}
            height={50}
          />
          <Image
            src={"/itgs/tools/tailwindcss.svg"}
            alt="tailwindcss"
            width={50}
            height={50}
          />
          <Image
            src={"/itgs/tools/mysql.svg"}
            alt="mysql"
            width={50}
            height={50}
          />
          <Image
            src={"/itgs/tools/premierpro.svg"}
            alt="premierpro"
            width={50}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
