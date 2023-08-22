import React from 'react'
import { StepBack } from 'lucide-react';
import { StepForward } from 'lucide-react';
import { useState } from 'react';

export const Carousel = (props) => {

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === props.data.length - 1 ? 0 : slide + 1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? props.data.length - 1 : slide - 1);
  }

  return (
    <>

      {/* carousel */}
      <div className='w-[600px] h-[400px] flex justify-center items-center relative'>

        {/* arrow left */}
        <StepBack
          onClick={prevSlide}
          className='absolute w-[2rem] h-[2rem] bg-white left-4 rounded-full cursor-pointer shadow-lg'
        />

        {props.data.map((item, index) => {
          // slide
          return <img src={item.src} alt={item.alt} key={index} className={slide === index ? "rounded-[0.5rem] shadow-lg w-full h-full" : "hidden rounded-[0.5rem] border-2 border-black shadow-lg w-full h-full"} />
        })}

        {/* arrow right */}
        <StepForward
          onClick={nextSlide}
          className='absolute w-[2rem] h-[2rem] bg-white right-4 rounded-full cursor-pointer shadow-lg'
        />

        {/* indicators */}
        <span className='flex absolute bottom-4'>
          {props.data.map((_, index) => {

            // indicator
            return <button
            key={index}
            onClick={() => {setSlide(index)}}
            className={slide === index ? "h-[0.5rem] w-[0.5rem] bg-[#ffa200] rounded-full mx-[0.2rem] cursor-pointer shadow-lg border border-black" : "h-[0.5rem] w-[0.5rem] bg-[#ffa20080] rounded-full mx-[0.2rem] cursor-pointer shadow-lg"}></button>
          })}
        </span>
      </div>
    </>
  )
}
