import Link from "next/link";
import { FC } from "react";

interface NavItemProps {
  url: string;
  children: React.ReactNode;
}

const NavItem: FC<NavItemProps> = ({ url, children }) => {
  return (
    <>
      <Link href={url} className="relative group">
        <span>{children}</span>
        <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-slate-400 xl:group-hover:w-1/2 xl:group-hover:transition-all"></span>
        <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-slate-400 xl:group-hover:w-1/2 xl:group-hover:transition-all"></span>
      </Link>
    </>
  );
};

export default NavItem;
