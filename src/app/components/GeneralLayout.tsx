import { FC, ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import TailwindIndicator from "./TailwindIndicator";

interface GeneralLayoutProps {
  children: ReactNode;
}

const GeneralLayout: FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <TailwindIndicator />
      <Footer />
    </>
  );
};

export default GeneralLayout;
