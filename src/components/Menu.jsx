import React from "react";
import Affogato from "../assets/affogato.png";
import Americano from "../assets/americano.png";
import BlackCoffee from "../assets/blackcoffee.png";
import Coffeepack from "../assets/packcoffee.png";
import Java from "../assets/java.png";
import Coffeepack2 from "../assets/coffeepack.png";
import { delay, motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { FadeLeft } from "../utility/animation";

const MenuData = [
  {
    id: 1,
    title: "Affogato",
    link: "#",
    price: "$2.00",
    img: Affogato,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Americano",
    link: "#",
    price: "$2.00",
    img: Americano,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Black Coffee",
    link: "#",
    price: "$2.00",
    img: BlackCoffee,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Coffeepack",
    link: "#",
    price: "$10.00",
    img: Coffeepack,
    delay: 1.2,
  },
  {
    id: 5,
    title: "Java",
    link: "#",
    price: "$2.00",
    img: Java,
    delay: 1.4,
  },
  {
    id: 6,
    title: "Delivery",
    link: "#",
    price: "$2.00",
    img: Coffeepack2,
    delay: 1.6,
  },
];

const Menu = () => {
  return (
    <section>
      <div className="container pt-10 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase text-style"
        >
          Coffee For You
        </motion.h1>
        <div className="justify-around columns-3 grid grid-cols-3 p-4 menu">
          {MenuData.map((menu) => (
            <motion.div
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              className=" m-4 px-4 py-2 mt-7 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] imghover half-color-hover"
            >
              <img
                src={menu.img}
                alt="Menu"
                className="w-52 mb-4 ml-12 scale-100 "
              />
              <div className="flex justify-between fore text-secondary">
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold">{menu.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className=" w-[300px] ml-[36%] text-[#603F26] parent-icon">
          <motion.button
            variants={FadeLeft(1)}
            initial="hidden"
            whileInView={"visible"}
            className="mt-10  text-xl w-[300px] border-2 border-[#603F26] p-4 pl-20 buttons flex gap-6"
          >
            See Products
            <FaShoppingCart className="mt-1 w-6 icon" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
