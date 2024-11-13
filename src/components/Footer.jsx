import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { GiCoffeeBeans } from 'react-icons/gi';
import FooterBg from "../assets/coffee-footer.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className=" text-white mt-10">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container background grid grid-cols-1 md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4 background">
            <div className='text-2xl flex justify-center md:justify-start items-center gap-2 font-bold uppercase background'>
              <GiCoffeeBeans className="background" />
              <p className='background font-normal'>Coffee Co.</p>

            </div>
            <p className="background address pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
            <a
              href="#"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full address"
            >
              Take Your Coffee at Anytime
            </a>
          </div>
          {/* second col links */}
          <div className="py-8 px-4 background footers">
            <h1 className="text-xl font-semibold mb-3 background">
              Quick Links
            </h1>
            <ul className="space-y-3 background">
              {FooterLinks.map((data, index) => (
                <li key={index} className="background">
                  <a
                    href={data.link}
                    className="background inline-block hover:scale-105 duration-200 "
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Address */}
          <div className="py-8 px-4 col-span-2 sm:col-auto background ">
            <h1 className="text-xl font-semibold mb-3 background flex justify-center md:justify-start">
              Address
            </h1>
            <div className="background address">
              <p className=" background">Whereever....</p>
              <p className="background">+91 1234567890</p>

              {/* social links */}
              <div className="address flex gap-3 background">
                <a href="#" className="background">
                  <FaInstagram className="text-3xl hover:text-primary duration-300 background" />
                </a>
                <a href="#" className="background">
                  <FaFacebook className="text-3xl hover:text-primary duration-200 background" />
                </a>
                <a href="#" className="background">
                  <FaLinkedin className="text-3xl hover:text-primary duration-200 background" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;