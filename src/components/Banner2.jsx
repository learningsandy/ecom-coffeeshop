import React from "react";
import Circle from "../assets/coffee-white.png";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";
import Bg from "../assets/bannerbrown.jpeg";

const Banner2 = () => {
  return (
    <section>
      <div className="container flex p-0 md:grid-cols-2 md:space-x-0 md:py-24">
        <motion.img
          variants={FadeUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={Circle}
          alt="Cofffee"
          className="background  ml-[40%] absolute drop-shadow z-10 rounded-full spin banner2"
        />
        <motion.p
          variants={FadeUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-[100%] bg-red-950"
        >
          {" "}
          <img
            src={Bg}
            className="bg-red-400 w-[100%] h-[100%] opacity-80 "
            alt="Backwave"
          />
        </motion.p>
      </div>
    </section>
  );
};

export default Banner2;
