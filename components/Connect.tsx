import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "motion/react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Connect = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-14 mb-11" id="contact">
      <div className="flex flex-col justify-center items-center ">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Interested in building something <br /> amazing together?
          </motion.h1>
        </LampContainer>
        <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
      </div>
    </div>
  );
};

export default Connect;
