"use client"
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Grid, Pagination } from "swiper";

const Sponsors = () => {

  const images = [
    "https://picsum.photos/id/231/300/300",
    "https://picsum.photos/id/232/300/300",
    "https://picsum.photos/id/233/300/300",
    "https://picsum.photos/id/234/300/300",
    "https://picsum.photos/id/235/300/300",
    "https://picsum.photos/id/236/300/300",
    "https://picsum.photos/id/237/300/300",
    "https://picsum.photos/id/238/300/300",
    "https://picsum.photos/id/239/300/300"
  ]
console.log(images.indexOf())
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          images.map((image, index)=>
          <SwiperSlide
          key={index}>
          <img src={image} />
        </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};

export default Sponsors;



// "use client"
// // import { useRouter } from 'next/compat/router';
// import React, { useRef, useState } from 'react';
// // Core modules imports are same as usual
// import { Navigation, Pagination } from 'swiper';
// // Direct React component imports
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// // Styles must use direct files imports
// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module


// const Sponsors = () => {
  

//     const sliderRef = useRef(null);
//   const [slideIndex, setSlideIndex] = useState(0);

//   // Function to slide to next slide
//   const slideNext = () => {
//     setSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
//   };

//   // Function to slide to previous slide
//   const slidePrev = () => {
//     setSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
//   };

//   // Add event listener for window resize
//   const handleWindowResize = () => {
//     setSlideIndex(0);
//     sliderRef.current.style.transform = `translateX(0px)`;
//   };

//   React.useEffect(() => {
//     window.addEventListener('resize', handleWindowResize);
//     return () => {
//       window.removeEventListener('resize', handleWindowResize);
//     };
//   }, []);
//     return (
//         <div className="w-full">
//       <div className="relative overflow-hidden">
//         <ul
//           ref={sliderRef}
//           id="slider"
//           className="flex transition-transform duration-300 ease-in"
//           style={{ transform: `translateX(-${slideIndex * window.innerWidth}px)` }}
//         >
//           <li className="w-full">
//             <img src="https://bre.is/DhqrXMLe" alt="Image 1" className="w-full h-full object-cover" />
//           </li>
//           <li className="w-full">
//             <img src="https://bre.is/PbCA8PBZ" alt="Image 2" className="w-full h-full object-cover" />
//           </li>
//           <li className="w-full">
//             <img src="https://bre.is/stcc6K3Q" alt="Image 3" className="w-full h-full object-cover" />
//           </li>
//           <li className="w-full">
//             <img src="https://bre.is/U66BMWdp" alt="Image 4" className="w-full h-full object-cover" />
//           </li>
//           <li className="w-full">
//             <img src="https://bre.is/FnusSoFY" alt="Image 5" className="w-full h-full object-cover" />
//           </li>
//           <li className="w-full">
//             <img src="https://bre.is/jA5WdcC6" alt="Image 6" className="w-full h-full object-cover" />
//           </li>
//           <li className="w-full">
//             <img src="https://bre.is/uVp9hCWQ" alt="Image 7" className="w-full h-full object-cover" />
//           </li>
//           <li className="w-full">
//             <img src="https://bre.is/BSNfCLVW" alt="Image 8" className="w-full h-full object-cover" />
//           </li>
//           <li className="w-full">
//             <img src="https://bre.is/DhqrXMLe" alt="Image 9" className="w-full h-full object-cover" />
//           </li>
//           <li className="w-full">
//             <img src="https://bre.is/PbCA8PBZ" alt="Image 10" className="w-full h-full object-cover" />
//           </li>
//         </ul>
//       </div>
//     </div>

//     );
// };

// export default Sponsors;