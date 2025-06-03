import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "motion/react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Connect = () => {
  return (
  
      <LampContainer className="">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Interested in build something <br /> amazing together?
        </motion.h1>
        <div>
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
        </div>
      </LampContainer>
 
  );
};

export default Connect;
