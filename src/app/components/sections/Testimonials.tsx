import Image from "next/image";

import mackdoe from "../itgs/markdoe.svg";
import quotestart from "../itgs/elements/quote-start.svg";
import quoteend from "../itgs/elements/quote-end.svg";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className=" bg-white">
      {/* Container */}
      <div className="container mx-auto flex place-content-center items-center">
        {/* Testimonial */}
        <div className="w-[90rem] my-[7.3rem] px-10 rounded shadow-lg flex flex-col justify-center items-center py-12 bg-mrk-blacksqueze bg-opacity-30">
          <Image src={mackdoe} alt="testimonial" />
          <p className="text-[5.2rem] font-bold">Mark Doe</p>

          {/* Testimonial Text */}
          <div className="relative text-center ">
            <Image
              src={quotestart}
              alt="quote"
              className="absolute -top-5 -left-14"
            />
            <p className="w-[75rem] text-[1.8rem] font-light italic">
              Thanks to the exceptional services provided by ITeration Global
              Solutions, our firm has undergone a metamorphosis. Due to their
              tailored solutions, easy integration, and creative approach, which
              have enhanced our productivity and client experience, they have
              developed into a highly appreciated, reliable partner.
            </p>
            <Image
              src={quoteend}
              alt="quote"
              className="absolute -bottom-5 -right-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
