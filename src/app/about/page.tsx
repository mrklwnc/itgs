import GeneralLayout from "../_components/GeneralLayout";
import AboutSection from "../_components/sections/About";
import OurCompanySection from "../_components/sections/OurCompany";
import MissionAndVisionSection from "../_components/sections/Mission&Vision";

export default function Home() {
  return (
    <GeneralLayout>
      <AboutSection />

      <OurCompanySection />

      <MissionAndVisionSection />
    </GeneralLayout>
  );
}
