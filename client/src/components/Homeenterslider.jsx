import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import { RxDotFilled } from 'react-icons/rx';\
import { RxBorderDotted } from "react-icons/rx";

function Homeenterslider() {
    const slides = [
      {
      url: 'https://www.phanteks.com/images/slider/NV5_Banner.jpg',
      },
      {
        url: 'https://www.phanteks.com/images/slider/D30-140_Banner%201920x850.jpg',
      },
      {
        url: 'https://www.phanteks.com/images/slider/Premium%20Vertical%20GPU%20Bracket.jpg',
      },
      {
        url: 'https://www.phanteks.com/images/slider/Enthoo%20Pro%202%20SE_Banner%201920x850.jpg',
      },
      {
        url: 'https://www.phanteks.com/images/slider/Glacier%20R260_Banner%201920x850.jpg',
      },
      
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  
    return (
      <div className='max-w-[1400px] h-[580px] w-full m-auto py-0 px-4 -mt-5 relative group mb-5'>
        <div 
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }} 
          className='w-full h-full rounded-md bg-center bg-cover duration-500'>
          </div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-white text-orange-500 text-bold cursor-pointer'>
          <MdArrowBackIos onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-white text-orange-500 text-bold cursor-pointer'>
          <MdArrowForwardIos onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxBorderDotted />
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Homeenterslider;
