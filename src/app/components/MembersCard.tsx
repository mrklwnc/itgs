import Image from "next/image";
import { FC } from "react";

interface MembersProps {
  bg?: string;
  name?: string;
  position?: string;
}

const MembersCard: FC<MembersProps> = ({ bg, name, position }) => {
  return (
    <div
      className={`flex justify-center items-end w-[30rem] h-[40rem] ${bg} bg-cover bg-center rounded-xl group hover:scale-110 xl:hover:scale-125 duration-500 ease-in-out shadow-xl hover:shadow-2xl`}
    >
      <div className="bg-[#0D0F11] bg-opacity-50 w-full m-6 py-4 text-white text-center rounded-xl shadow-xl transition group-hover:-translate-y-6 group-hover:shadow-none">
        <p className="text-[1.6rem] font-bold">{name}</p>
        <p className="text-[1.2rem] font-thin">{position}</p>
      </div>
    </div>
  );
};

export default MembersCard;
