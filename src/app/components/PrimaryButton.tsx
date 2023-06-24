import Link from "next/link";

import { FC } from "react";

interface PrimaryButtonProps {
  url: string;
  size?: string;
  color?: string;
  bg?: string;
  children: React.ReactNode;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  url,
  size,
  color,
  bg,
  children,
}) => {
  return (
    <>
      <Link
        href={url}
        className={`text-[${size}] text-${color} bg-${bg} py-5 px-10 rounded-lg`}
        // className="text-[1.8rem] text-mrk-chambray py-5 px-10 bg-white rounded-lg"
      >
        {children}
      </Link>
    </>
  );
};

export default PrimaryButton;
