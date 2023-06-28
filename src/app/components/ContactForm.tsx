"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import Image from "next/image";

import FormInput from "./FormInput";

type Inputs = {
  fullname: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [isVisible, setIsVisible] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="h-full">
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="fullname"
            className="block text-[1.6rem] font-medium leading-6 text-mrk-chambray"
          >
            Full Name
          </label>
          <FormInput type="text" name="fullname" id="fullname" />
          <label
            htmlFor="email"
            className="block text-[1.6rem] font-medium leading-6 text-mrk-chambray"
          >
            Email
          </label>
          <FormInput type="email" name="email" id="email" />
          <label
            htmlFor="message"
            className="block text-[1.6rem] font-medium leading-6 text-mrk-chambray"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="8"
            className="border-2 border-mrk-chambray text-mrk-chambray p-5 rounded-lg focus:bg-slate-200 text-2xl resize-none"
          ></textarea>

          <div className="mt-10">
            <button
              type="submit"
              className="bg-mrk-chambray text-white text-[1.8rem] px-6 py-4 rounded-lg group"
              // onClick={() => alert("Message Sent")}
            >
              <div className="flex gap-4 items-center">
                Send Message
                <Image
                  src="/itgs/elements/icons/send.svg"
                  alt="send icon"
                  width={30}
                  height={30}
                  className="transition group-hover:animate-waving-hand"
                />
              </div>
            </button>
          </div>
        </div>
      </form> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full justify-between"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <label
              htmlFor="fullname"
              className="block text-[1.6rem] font-medium leading-6 text-mrk-chambray"
            >
              Full Name
            </label>
            <input
              {...register("fullname", { required: true })}
              className="border-2 border-mrk-chambray text-mrk-chambray p-5 rounded-lg focus:bg-slate-200 text-2xl"
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="block text-[1.6rem] font-medium leading-6 text-mrk-chambray"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="border-2 border-mrk-chambray text-mrk-chambray p-5 rounded-lg focus:bg-slate-200 text-2xl"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <label
              htmlFor="message"
              className="block text-[1.6rem] font-medium leading-6 text-mrk-chambray"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              className="border-2 border-mrk-chambray text-mrk-chambray p-5 rounded-lg focus:bg-slate-200 text-2xl resize-none"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-mrk-chambray text-white text-[1.8rem] px-6 py-4 rounded-lg group"
          >
            <div className="flex gap-4 items-center">
              Send Message
              <Image
                src="/itgs/elements/icons/send.svg"
                alt="send icon"
                width={30}
                height={30}
                className="transition group-hover:animate-waving-hand"
              />
            </div>
          </button>
        </div>
      </form>

      {/* Thank you for reaching out to us */}
      <div
        className={`${
          !isVisible ? "hidden" : ""
        } absolute z-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35rem]`}
      >
        <div className="relative bg-mrk-chambray flex flex-col gap-12 justify-between items-center rounded-lg px-6 py-12">
          <div className="absolute top-5 right-5">
            <button
              onClick={() => {
                setIsVisible(!isVisible);
                window.location.reload();
              }}
            >
              <Image
                src="/itgs/elements/icons/exit.svg"
                alt="x-icon"
                width={20}
                height={20}
              />
            </button>
          </div>
          <Image
            src="/itgs/elements/icons/celebration.svg"
            alt="celebrate"
            width={393.207}
            height={292.987}
          />
          <div className="text-center text-white flex flex-col gap-4">
            <h3 className="text-[2.4rem] font-bold">
              Thank you for trusting us!
            </h3>
            <p className="text-xl px-12">
              Kindly wait <strong>1-2 working days</strong> for a reply from one
              of our representative to your email. Let&apos;s make this happen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
