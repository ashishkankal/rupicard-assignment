import Image from "next/image";
import React from "react";
import sbmLogo from "./assets/SBM.svg";
export const Feature4 = () => {
  return (
    <section className="py-12 lg:py-[100px] bg-[#222627] lg:py-[120px]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:flex-col text-left md:text-center">
        <p className="mx-auto text-[28px] font-medium md:text-[40px] md:max-w-6xl text-white leading-[1.2]">
          <span>
            At Uni, we’re committed to{" "}
            <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#8fffef] to-[#f9f490]">
              {" "}
              delivering an unmatched credit experience{" "}
            </span>{" "}
            for millions of Indians.
          </span>
        </p>
        <p className="mt-6 max-w-[500px] mx-auto text-[#BFC9CC] text-2xl">
          On this mission, we’ve partnered with some of the best in the
          business.
        </p>
        <div className="md:mt-24 flex flex-row justify-center flex-wrap">
          <div className="flex justify-center w-[100px] md:w-44 mt-10 md:mt-0 md:mx-8 mx-4">
            <Image className="w-full h-full" src={sbmLogo} alt="sbm bank" />
          </div>
        </div>
      </div>
    </section>
  );
};
