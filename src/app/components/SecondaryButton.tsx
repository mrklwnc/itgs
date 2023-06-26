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
          <span className={`text-[${size}] text-${color} bg-${bg}`}>
            {children}
          </span>
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
