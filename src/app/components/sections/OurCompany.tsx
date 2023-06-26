import CompanyCard from "../CompanyCard";

const OurCompanySection = () => {
  return (
    <section
      id="our-company"
      className="min-h-[60rem] bg-white flex justify-center items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-12">
          <h1 className="text-[4rem] font-bold text-mrk-darkblue ">
            Why choose our Company?
            <hr className="w-1/12 border-2 border-mrk-darkblue" />
          </h1>

          <div className="flex justify-between">
            <CompanyCard
              icon="/itgs/elements/icons/expert.svg"
              title="Expert & Experience"
              description="Skilled and Experienced professionals knowledgeable with the latest industry trends"
            />
            <CompanyCard
              icon="/itgs/elements/icons/handshake.svg"
              title="Client-Centric Approach"
              description="Building strong relationships with our clients based on trust, open communication and collaboration"
            />
            <CompanyCard
              icon="/itgs/elements/icons/clipboard.svg"
              title="Quality & Reliability"
              description="Tested products to ensure reliable results and top-notch quality performance"
            />
            <CompanyCard
              icon="/itgs/elements/icons/timely-check.svg"
              title="Timely Delivery"
              description="Our efficient project management practices ensure that we deliver results on time, every time."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompanySection;
