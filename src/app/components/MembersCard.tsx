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
      className={`flex justify-center items-end w-[30rem] h-[40rem] ${bg} bg-cover rounded-xl group hover:scale-110 transition-transform duration-300 ease-in-out shadow-xl hover:shadow-2xl`}
    >
      <div className="bg-[#0D0F11] bg-opacity-50 w-full m-6 py-4 text-white text-center rounded-xl shadow-xl transition group-hover:-translate-y-6 group-hover:shadow-none">
        <p className="text-[1.8rem] font-bold">{name}</p>
        <p className="text-[1.5rem] font-thin">{position}</p>
      </div>
    </div>
  );
};

export default MembersCard;
