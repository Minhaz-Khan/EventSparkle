"use client"

import Image from 'next/image';
import './Slide.css'

import SlideCondition from '@/Components/customComponent/SlideCondition/slideCondition';

const Slide = ({ slide, isActive }) => {

    // console.log(slide)
    const { text1, text2, text3, text4, text5, pic } = slide;
    // console.log(pic)




    return (
        <div>
            <div className='relative '>

                <Image src={pic} width={1000} height={50} className='w-full h-screen'></Image>

                <div className="absolute lg:mx-0 sm:ml-5 lg:left-[166px] bottom-28 bg-white p-[45px] lg:w-[540px] h-[280px]">

                    <SlideCondition slide={slide} isActive={isActive}></SlideCondition>

                </div>

            </div>
        </div >
    );
};

export default Slide;