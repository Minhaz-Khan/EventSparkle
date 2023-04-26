"use client"

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import './Slide.css'

const Slide = ({ slide, isActive }) => {

    // console.log(slide)
    const {text1,text2,text3,text4,text5,pic} = slide;
    // console.log(pic)

    const textRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            const timeoutId = setTimeout(() => {
                textRef.current.classList.add("opacity-100");
            }, 20000);

            return () => clearTimeout(timeoutId);
        } else {
            textRef.current.classList.remove("opacity-100");
        }
    }, [isActive]);


    return (
        <div >
            <div className='relative h-[750px] overflow-hidden'>
                {/* <img src={pic1} alt="" className='h-[600px] w-full' /> */}
                
                
                <Image src={pic} width={1000} height={0} className='w-full h-full'></Image>

                <div className="absolute lg:mx-0 sm:ml-5 lg:left-[166px] bottom-28 bg-white p-[45px] lg:w-[540px] h-[280px]">

                    <div>

                        <p ref={textRef}
                            className={` text-[12px] opacity-0 transition-opacity duration-1000 ease-out delay-100 ${isActive ? "opacity-100 text-1" : ""
                                }`}>{text1}</p>
                        <p ref={textRef}
                            className={`text-[36px] opacity-0 transition-opacity duration-1000 ease-out delay-100 ${isActive ? "opacity-100 text-1" : ""
                                }`}>{text2}</p>
                        <p ref={textRef}
                            className={`text-[36px] opacity-0 transition-opacity duration-1000 ease-out delay-100 ${isActive ? "opacity-100 text-1" : ""
                                }`}>{text3}</p>
                        <p ref={textRef}
                            className={`text-[16px] opacity-0 transition-opacity duration-1000 ease-out delay-100 ${isActive ? "opacity-100 text-1" : ""
                                }`}>{text4}</p>
                        <p ref={textRef}
                            className={`opacity-0 transition-opacity duration-1000 ease-out delay-100 ${isActive ? "opacity-100 text-1" : ""
                                }`}>{text5}</p>



                        {/* <p className='text-[36px]'>International & Destination</p>
                        <p className='text-[36px]'>Wedding Planner</p>

                        <p className='text-[16px]'>No matter your dreams - we can assist you in planning your</p>
                        <p>wedding - events</p> */}




                    </div>






                </div>

            </div>
        </div >
    );
};

export default Slide;