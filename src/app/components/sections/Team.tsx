import MembersCard from "../MembersCard";
const TeamSection = () => {
  return (
    <section id="team" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto">
        {/*Cards*/}
        <div className="flex flex-col">
          <p className="text-[5.2rem] font-bold text-center">Our Team</p>

          <div className="flex justify-center gap-4">
            <MembersCard
              bg="bg-jeneal"
              name="Jeneal Fuelas"
              position="Graphics and Multimedia"
            />
            <MembersCard
              bg="bg-jayvie"
              name="Jayvie De Leon"
              position="Web App Developer"
            />
            <MembersCard
              bg="bg-lewence"
              name="Mark Lewence Endrano"
              position="Team Leader"
            />
            <MembersCard
              bg="bg-rayunisky"
              name="Rayunisky Castro"
              position="Mobile App Developer"
            />
            <MembersCard
              bg="bg-shawn"
              name="Shawn Farrow"
              position="UI/UX Designer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
