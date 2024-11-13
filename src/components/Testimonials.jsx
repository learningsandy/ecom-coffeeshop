import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Coffee from "../assets/coffee.png";
import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";
import { FadeLeft } from "../utility/animation";

const Testimonials = () => {
  const swiperRef = useRef(null);

  const moveToNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const moveToPrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const jumpToSlide = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="container border-2 border-[#603F26] relative h-56 overflow-hidden rounded-lg md:h-96 slider"
      variants={FadeLeft(0)}
      initial="hidden"
      animate="visible"
    >
      {/* Slides */}
      {[Slide1, Slide2, Slide3, Slide1, Coffee].map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content duration-700 ease-in-out pl-64">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="slide-image w-32 mt-40 absolute -translate-x-1/2 -translate-y-1/2 left-1/2"
            />
            <p className="slide-text absolute -translate-x-1/2 -translate-y-1/2 top-1/2 mt-20 left-1/2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, quisquam. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </SwiperSlide>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute z-10 flex bottom-5 -translate-x-1/2 left-1/2 space-x-3 rtl:space-x-reverse dotbutton">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full bg-primary"
            aria-label={`Slide ${index + 1}`}
            onClick={() => jumpToSlide(index)}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={moveToPrevSlide}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9a7b4f] hover:bg-[#362511] transition-all duration-1000">
          <svg
            className="w-4 h-4 text-white background rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={moveToNextSlide}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9a7b4f] hover:bg-[#362511] transition-all duration-1000">
          <svg
            className="w-4 h-4 text-white background rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </Swiper>
  );
};

export default Testimonials;
