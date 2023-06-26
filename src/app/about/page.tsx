import GeneralLayout from "../components/GeneralLayout";
import AboutSection from "../components/sections/About";
import OurCompanySection from "../components/sections/OurCompany";
import MissionAndVisionSection from "../components/sections/Mission&Vision";

export default function Home() {
  return (
    <GeneralLayout>
      <AboutSection />

      <OurCompanySection />

      <MissionAndVisionSection />
    </GeneralLayout>
  );
}
