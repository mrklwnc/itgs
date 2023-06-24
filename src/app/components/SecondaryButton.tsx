import Link from "next/link";
import Image from "next/image";

import arrow from "./itgs/elements/icons/arrow.svg";

const SecondaryButton = ({ url, color, size, bg, children }) => {
  return (
    <>
      <Link href={url}>
        <div className="flex gap-8">
          <span className={`text-[${size}] text-${color} bg-${bg}`}>
            {children}
          </span>
          <Image
            src={arrow}
            alt="devices"
            className="w-[30px] animate-bounce-vertical"
          />
        </div>
      </Link>
    </>
  );
};

export default SecondaryButton;
