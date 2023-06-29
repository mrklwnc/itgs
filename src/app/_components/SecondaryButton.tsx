import Link from "next/link";
import Image from "next/image";

import { FC } from "react";

interface SecondaryButtonProps {
  url: string;
  size?: string;
  color?: string;
  bg?: string;
  children: React.ReactNode;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
  url,
  size,
  color,
  bg,
  children,
}) => {
  return (
    <>
      <Link href={url}>
        <div className="flex gap-8">
          <div className="relative group">
            <span className={`text-[${size}] text-${color} bg-${bg}`}>
              {children}
            </span>
            <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-slate-400 xl:group-hover:w-1/2 xl:group-hover:transition-all"></span>
            <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-slate-400 xl:group-hover:w-1/2 xl:group-hover:transition-all"></span>
          </div>
          <Image
            src={"/itgs/elements/icons/arrow.svg"}
            alt="devices"
            width={30}
            height={30}
            className="w-[30px] animate-bounce-vertical"
          />
        </div>
      </Link>
    </>
  );
};

export default SecondaryButton;
