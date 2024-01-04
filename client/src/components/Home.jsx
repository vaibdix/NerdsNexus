import { motion } from "framer-motion";
import React from "react";
import { Delivery, HeroBg } from "../assets";
import { heroData } from "../utils/data";

const Home = () => {
  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full bg-orange-50 bg-cover rounded-2xl border-2 border-orange-300 border-solid pl-10 pr-10 pb-10"
        id="home"
      >
        <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6 ml-5">
          <p className="text-[2rem] lg:text-[3.5rem] font-bold tracking-normal text-headingColor">
            <span className="text-orange-600 text-[3rem] lg:text-[4rem]">
              {" "}
              <img
                src="https://cwsmgmt.corsair.com/press/CORSAIRLogo2020_stack_K.png"
                width={200}
                color="#000"
              />
            </span>
          </p>
          <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
            <p className="text-base text-orange-500 font-semibold">
              This Months Sponser
            </p>
          </div>

          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
            CORSAIR is a leading global developer and manufacturer of
            high-performance gear and technology for gamers, content creators,
            and PC enthusiasts. From award-winning PC components and
            peripherals, to premium streaming equipment, smart ambient lighting,
            and esports coaching services, CORSAIR delivers a full ecosystem of
            products that work together to enable everyone, from casual gamers
            to committed professionals, to perform at their very best.
          </p>

          <motion.button
            whileTap={{ scale: 1.14 }}
            type="button"
            className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white"
          >
            Pre Book Now
          </motion.button>
        </div>

        <div className="py-2 flex-1 flex items-center relative">
          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
            {heroData &&
              heroData.map((n) => (
                <div
                  key={n.id}
                  className="w-290 p-4 bg-cardOverlay rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                >
                  <img
                    src={n.imageSrc}
                    className="w-70 lg:w-40 -mt-10 lg:-mt-20 "
                    alt="I1"
                  />

                  <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                    {n.name}
                  </p>

                  <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                    {n.decp}
                  </p>

                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-600">₹</span> {n.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
