'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";
import pic1 from '../../../public/1.jpg'
import pic2 from '../../../public/2.jpg'
import pic3 from '../../../public/3.jpg'
import Image from 'next/image';
import Slide from './Slide';

const Banner = () => {
    const slides = [
        { id: 1, text1: "D R E A M   M A K E R", text2: "International & Destination", text3: "Wedding Planner", text4: "No matter your dreams - we can assist you in planning your", text5: "wedding - events", pic: `${pic1.src}` },

        { id: 2, text1: "D R E A M   M A K E R", text2: "International & Destination", text3: "Wedding Planner", text4: "No matter your dreams - we can assist you in planning your", text5: "wedding - events", pic: `${pic2.src}` },

        { id: 3, text1: "D R E A M   M A K E R", text2: "International & Destination", text3: "Wedding Planner", text4: "No matter your dreams - we can assist you in planning your", text5: "wedding - events", pic: `${pic3.src}` },
        
    ];

    console.log(slides)

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.activeIndex);
    };

    return (
        <div >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"

                onSlideChange={handleSlideChange}
            >

                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Slide slide={slide} isActive={slide.id === activeSlideIndex + 1} />
                    </SwiperSlide>
                ))}


                









            </Swiper>

        </div>
    );
};

export default Banner;