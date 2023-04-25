"use client"
// import { useRouter } from 'next/compat/router';
import React, { useRef, useState } from 'react';


const Sponsors = () => {
  

    const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Function to slide to next slide
  const slideNext = () => {
    setSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
  };

  // Function to slide to previous slide
  const slidePrev = () => {
    setSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
  };

  // Add event listener for window resize
  const handleWindowResize = () => {
    setSlideIndex(0);
    sliderRef.current.style.transform = `translateX(0px)`;
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
    return (
        <div className="w-full">
      <div className="relative overflow-hidden">
        <ul
          ref={sliderRef}
          id="slider"
          className="flex transition-transform duration-300 ease-in"
          style={{ transform: `translateX(-${slideIndex * window.innerWidth}px)` }}
        >
          <li className="w-full">
            <img src="https://bre.is/DhqrXMLe" alt="Image 1" className="w-full h-full object-cover" />
          </li>
          <li className="w-full">
            <img src="https://bre.is/PbCA8PBZ" alt="Image 2" className="w-full h-full object-cover" />
          </li>
          <li className="w-full">
            <img src="https://bre.is/stcc6K3Q" alt="Image 3" className="w-full h-full object-cover" />
          </li>
          <li className="w-full">
            <img src="https://bre.is/U66BMWdp" alt="Image 4" className="w-full h-full object-cover" />
          </li>
          <li className="w-full">
            <img src="https://bre.is/FnusSoFY" alt="Image 5" className="w-full h-full object-cover" />
          </li>
          <li className="w-full">
            <img src="https://bre.is/jA5WdcC6" alt="Image 6" className="w-full h-full object-cover" />
          </li>
          <li className="w-full">
            <img src="https://bre.is/uVp9hCWQ" alt="Image 7" className="w-full h-full object-cover" />
          </li>
          <li className="w-full">
            <img src="https://bre.is/BSNfCLVW" alt="Image 8" className="w-full h-full object-cover" />
          </li>
          <li className="w-full">
            <img src="https://bre.is/DhqrXMLe" alt="Image 9" className="w-full h-full object-cover" />
          </li>
          <li className="w-full">
            <img src="https://bre.is/PbCA8PBZ" alt="Image 10" className="w-full h-full object-cover" />
          </li>
        </ul>
      </div>
      <button id="prevBtn" onClick={slidePrev}>
        Previous
      </button>
      <button id="nextBtn" onClick={slideNext}>
        Next
      </button>
    </div>

    );
};

export default Sponsors;