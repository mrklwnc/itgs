import Image from "next/image";
import Link from "next/link";

import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center">
      <div className="relative container mx-auto flex justify-center">
        {/* Contact Form */}
        <div className="flex h-[68rem] w-10/12">
          {/* Form */}
          <div className="w-8/12 flex flex-col gap-4 bg-white px-12 py-12 rounded-l-lg">
            <div className="flex justify-between">
              {/* Get in Touch */}
              <div className="flex gap-4">
                <h1 className="text-[4rem] font-bold text-mrk-darkblue ">
                  Get in Touch
                  <hr className="w-5/12 border-2 border-mrk-darkblue" />
                </h1>
                <Image
                  src="/itgs/elements/icons/handshake2.svg"
                  alt="icon"
                  width={50}
                  height={50}
                />
              </div>

              {/* Logo */}
              <div className="flex items-center gap-10">
                <Link href="https://www.linkedin.com/in/mark-lewence-endrano/">
                  <Image
                    src="/itgs/elements/icons/linkedin.svg"
                    alt="linkedin"
                    width={30}
                    height={30}
                    style={{
                      filter:
                        "invert(37%) sepia(16%) saturate(999%) hue-rotate(172deg) brightness(86%) contrast(94%)",
                    }}
                  />
                </Link>
                <Link href="https://www.facebook.com/endranolewence/">
                  <Image
                    src="/itgs/elements/icons/facebook.svg"
                    alt="facebook"
                    width={30}
                    height={30}
                    style={{
                      filter:
                        "invert(37%) sepia(16%) saturate(999%) hue-rotate(172deg) brightness(86%) contrast(94%)",
                    }}
                  />
                </Link>

                <Link href="https://github.com/mrklwnc">
                  <Image
                    src="/itgs/elements/icons/twitter.svg"
                    alt="twitter"
                    width={30}
                    height={30}
                    style={{
                      filter:
                        "invert(37%) sepia(16%) saturate(999%) hue-rotate(172deg) brightness(86%) contrast(94%)",
                    }}
                  />
                </Link>
              </div>
            </div>

            <p className="text-[1.8rem] mb-6 font-thin text-mrk-chambray">
              We are here to help you design and build your idea.
            </p>

            <ContactForm />
          </div>

          {/* Image */}
          <div className="w-4/12 bg-mrk-shipcove bg-mailman bg-no-repeat bg-contain bg-bottom rounded-r-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
