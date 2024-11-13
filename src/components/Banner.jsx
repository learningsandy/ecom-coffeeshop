import React from "react";
import Gif from "../assets/Coffee.gif";
import { SiBuymeacoffee } from "react-icons/si";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";

const Banner = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={Gif}
            alt="CoffeeGIF"
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>

        {/* Brand Info */}
        <div className="flex flex-col justify-center banner1">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px] ">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-semibold uppercase"
            >
              Ready to Serve{" "}
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-b-2 border-[#603F26]"
            >
              Specialty Coffees{" "}
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-b-2 border-[#603F26] pl-[75%] md:pl-[70%]"
            >
              Fresh Pastries
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-b-2 border-[#603F26]"
            >
              Seasonal Specials
            </motion.p>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-b-2 border-[#603F26] pl-[65%] md:pl-[60%]"
            >
              Quality Ingredients
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-b-2 border-[#603F26]"
            >
              Friendly Service
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-b-2 border-[#603F26] pl-[75%]"
            >
              Convenience
            </motion.p>
            <motion.button
              variants={FadeUp(0.9)}
              initial="hidden"
              animate="visible"
              className="primary-btn flex items-center gap-2"
            >
              Order Now
              <SiBuymeacoffee className="ml-1 bg-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
