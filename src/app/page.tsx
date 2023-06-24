import HeroSection from "./components/sections/Hero";
import ServicesSection from "./components/sections/Services";
import ToolsSection from "./components/sections/Tools";
import TestimonialsSection from "./components/sections/Testimonials";
import GeneralLayout from "./components/GeneralLayout";
import TeamSection from "./components/sections/Team";

export default function Home() {
  return (
    <GeneralLayout>
      <HeroSection />

      {/* <div className="w-full h-52 bg-gradient-to-b from-mrk-chambray to-white"></div> */}

      <ServicesSection />

      <ToolsSection />

      <TestimonialsSection />

      <TeamSection />
    </GeneralLayout>
  );
}
