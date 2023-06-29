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
        className={`text-[${size}] text-${color} bg-${bg} py-5 px-10 rounded-lg shadow-[0_9px_0_#1B263B] hover:shadow-[0_4px_0px_#1B263B] ease-out hover:translate-y-1 transition-all`}
      >
        {children}
      </Link>
    </>
  );
};

export default PrimaryButton;
