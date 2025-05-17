'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
];

export default function CustomSlider() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const total = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Swipe support
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let endX = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const onTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
      const diff = startX - endX;
      if (diff > 50) nextSlide();
      else if (diff < -50) prevSlide();
    };

    slider.addEventListener('touchstart', onTouchStart);
    slider.addEventListener('touchmove', onTouchMove);
    slider.addEventListener('touchend', onTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchmove', onTouchMove);
      slider.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="relative md:w-[800px] w-full mx-auto overflow-hidden select-none"
    >
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 md:h-[550px] h-[250px] relative"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-xl"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute hidden md:block top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute hidden md:block top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}