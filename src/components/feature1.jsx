import Image from "next/image";
import React from "react";
import forexGlobe from "./assets/forex_globe.png";
import FiveXReward from "./assets/five_x_rewards.png";
import OnePercentCashback from "./assets/one_percent_cashback.png";
import DownArrowSvg from "./assets/down_arrow.svg";
import { useElementOnScreen } from "@/lib/useElementOnScreen";

const AnimatedElement = ({ children, isVisible, delay }) => (
  <p
    className={`transition duration-1000 ${delay} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
    }`}
  >
    {children}
  </p>
);
const Feature1 = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: 0,
    reappear: false,
  });
  return (
    <div className={`py-12 md:py-[150px]`}>
      <section>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4  undefined">
          <div
            className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium"
            ref={containerRef}
          >
            <AnimatedElement isVisible={isVisible} delay="delay-0">
              Earn 1% assured cashback
              <span className="css-1ggwlzr">on your spends. Get</span> 5X
            </AnimatedElement>
            <AnimatedElement isVisible={isVisible} delay="delay-75">
              {" "}
              more value than cashback
              <span className="css-1ggwlzr"> at the Uni Store. Enjoy</span>
            </AnimatedElement>
            <AnimatedElement isVisible={isVisible} delay="delay-150">
              {" "}
              <span className="text-[#9EA7AE] css-1ggwlzr">
                round the clock{" "}
              </span>
              Whatsapp support.
              <span className="text-[#9EA7AE] css-1ggwlzr">And it's</span>
            </AnimatedElement>
            <AnimatedElement isVisible={isVisible} delay="delay-300">
              {" "}
              lifetime free
              <span className="css-1ggwlzr">
                ; no joining fee, no annual charges.
              </span>
            </AnimatedElement>
          </div>
          <div
            className={`flex md:justify-center py-12  transition duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-40"
            }`}
          >
            <div
              style={{
                background:
                  "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
              }}
              className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center"
            >
              <Image
                alt="down_arrow"
                src={DownArrowSvg}
                loading="lazy"
                className="w-9 md:w-14 css-0"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  px-8">
        <div className="flex justify-center flex-col">
          <div
            className="flex md:items-center flex-col-reverse md:flex-row
                
  w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
          >
            <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
              <div className="w-full md:w-[300px] lg:w-[510px]">
                <div>
                  <span style={{ fontWeight: 700 }}>
                    1% assured cashback on your spends.
                  </span>
                  <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                    The more you spend, the more you earn.
                  </span>
                </div>
              </div>
              <div className="info-caption">
                <div className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">
                  Not applicable on fuel purchase, rent &amp; wallet transfers,
                  ATM withdrawals &amp; international transactions.
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <Image src={OnePercentCashback} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex md:items-center flex-col-reverse md:flex-row-reverse
  
  w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
          >
            <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
              <div className="w-full md:w-[300px] lg:w-[510px]">
                <div>
                  <span style={{ fontWeight: 700 }}>
                    5x more value than your cashback,
                  </span>
                  <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                    {" "}
                    only at the Uni Store.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <Image src={FiveXReward} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex md:items-center flex-col-reverse md:flex-row
  
  w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
          >
            <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
              <div className="w-full md:w-[300px] lg:w-[510px]">
                <div>
                  <span style={{ fontWeight: 700 }}>Zero Forex Markup.</span>
                  <br />
                  <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                    {" "}
                    Go international, without any fees.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <Image src={forexGlobe} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
            <p>
              Lifetime <span className="text-[#5bd6c3]">free. </span>
              <span className="block sm:inline-block md:text-center">
                No joining fee.
              </span>
              <span className="block md:text-center"> No annual charges. </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
