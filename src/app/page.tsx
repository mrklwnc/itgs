import HeroSection from "./_components/sections/Hero";
import ServicesSection from "./_components/sections/Services";
import ToolsSection from "./_components/sections/Tools";
import TestimonialsSection from "./_components/sections/Testimonials";
import GeneralLayout from "./_components/GeneralLayout";
import TeamSection from "./_components/sections/Team";

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
