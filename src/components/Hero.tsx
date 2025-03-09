import { BIRTHDAY } from "@/utils/constants";
import { calculateTimeSince } from "@/utils/date";
import React from "react";

export const Hero = () => {
  const { years, months, days } = calculateTimeSince(BIRTHDAY);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hello, my name is Trevor
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            This is a guide to looking after me, my routine and commands I know.
          </p>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto">
              <fieldset className="flex flex-wrap -m-4 text-center border-gray-200 border-2 rounded">
                <legend className="p-4">My Age</legend>
                <div className="p-2 sm:p-4 w-1/3">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    {years}
                  </h2>
                  <p className="leading-relaxed">Years</p>
                </div>
                <div className="p-2 sm:p-4 w-1/3">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    {months}
                  </h2>
                  <p className="leading-relaxed">Months</p>
                </div>
                <div className="p-2 sm:p-4 w-1/3">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    {days}
                  </h2>
                  <p className="leading-relaxed">Days</p>
                </div>
              </fieldset>
            </div>
          </section>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/trev.webp"
          />
        </div>
      </div>
    </section>
  );
};
