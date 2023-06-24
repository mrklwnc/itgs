import Navbar from "./Navbar";
import TailwindIndicator from "./TailwindIndicator";
import Footer from "./Footer";
const GeneralLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {/* Media Query Indicator */}
      <TailwindIndicator />
    </>
  );
};

export default GeneralLayout;
