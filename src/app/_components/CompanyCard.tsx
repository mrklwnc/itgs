import { FC } from "react";
import Image from "next/image";

interface CompanyCardProps {
  icon: string;
  title: string;
  description: string;
}

const CompanyCard: FC<CompanyCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-mrk-chambray w-[27.5rem] h-[34.5rem] rounded-lg flex flex-col justify-center items-center gap-6 px-8">
      <Image src={icon} alt="icon" width={60} height={60} className="mb-10" />
      <h3 className="text-white text-[2.4rem] font-bold text-center">
        {title}
      </h3>
      <p className="text-white text-[1.6rem] font-thin text-center">
        {description}
      </p>
    </div>
  );
};

export default CompanyCard;
