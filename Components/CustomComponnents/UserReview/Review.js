"use client"
import React from 'react';
import './Parallax.css'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

import pic1 from '../../../public/avarta1.jpg'
import pic2 from '../../../public/avarta2.jpg'
import pic3 from '../../../public/avarta3.jpg'
import Image from 'next/image';

const Review = () => {



    return (

        <div className='parallax my-60'>

            <div className='w-2/5 bg-white ml-24 py-10'>
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div className='h-[600px] relative '>
                            {/* <img src={pic1} alt="" className='h-[600px] w-full' /> */}

                            <div className="absolute top-1/2 transform -translate-y-1/2 z-10">
                                <div className='py-7'>

                                    <div className='text-center py-4'>

                                        <p className='p-4 font-serif text-[24px]'>EventSparkle made planning my party a breeze! The site was easy to use and had everything I needed to create a memorable event.</p>
                                    </div>

                                    <div className='p-5 text-center'>
                                        <Image src={pic1} alt="" className='w-16 h-16 border rounded-full mx-auto'></Image>

                                        <p className='text-[20px] mt-2 text-[#e9c0a4] font font-serif'>
                                            Ms. Sayla 
                                            <br />
                                            <span className='text-[14px] text-[#999999]'>Customer</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>


                    <SwiperSlide>

                        <div className='h-[600px] relative'>
                            {/* <img src={pic2} alt="" className='h-[600px] w-full' /> */}

                            <div className="absolute top-1/2 transform -translate-y-1/2 z-10">
                                <div className='py-7'>

                                    <div className='text-center py-4'>

                                        <p className='p-4 font-serif text-[24px]'>EventSparkle made planning my party a breeze! The site was easy to use and had everything I needed to create a memorable event.</p>
                                    </div>

                                    <div className='p-5 text-center'>
                                        <Image src={pic2} alt="" className='w-16 h-16 border rounded-full mx-auto'></Image>

                                        <p className='text-[20px] mt-2 text-[#e9c0a4] font-serif'>
                                            Mr. Akmal Akbar
                                            <br />
                                            <span className='text-[14px] text-[#999999]'>Customer</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className='h-[600px] relative'>
                            {/* <img src={pic2} alt="" className='h-[600px] w-full' /> */}

                            <div className="absolute top-1/2 transform -translate-y-1/2 z-10">
                                <div className='py-7'>

                                    <div className='text-center py-4'>

                                        <p className='p-4 font-serif text-[24px]'>EventSparkle made planning my party a breeze! The site was easy to use and had everything I needed to create a memorable event.</p>
                                    </div>

                                    <div className='p-5 text-center'>
                                        <Image src={pic3} alt="" className='w-16 h-16 border rounded-full mx-auto'></Image>

                                        <p className='text-[20px] mt-2 text-[#e9c0a4] font-serif'>
                                            Mr. Akbar Ali
                                            <br />
                                            <span className='text-[14px] text-[#999999]'>Customer</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>



                </Swiper>
            </div>


            

        </div>


    );
};

export default Review;