import React from 'react';
import { FaLocationArrow, FaRocketchat, FaPhone} from 'react-icons/fa';
const GetInTouch = () => {
    return (
        <div>
            <div className='w-[320px] h-[280px] p-8 mx-auto bg-slate-300 shadow-lg mb-10'>
                <p className='text-black text-[24px] font-serif mb-4'>Get In Touch</p>
                <div className='flex align-middle mb-4'>
                    <FaLocationArrow className='text-black mx-2 mt-2'></FaLocationArrow> <p className='text-black mx-2'> Honey Business <br />
                        24 Fifth st., Los Angeles, USA</p>
                </div>

                <div className='flex align-middle mb-4'>
                    <FaRocketchat className='text-black mx-2 mt-2'></FaRocketchat> <p className='text-black mx-2'>eventsparkle@gmail.com</p>
                </div>

                <div className='flex align-middle'>
                    <FaPhone className='text-black mx-2 mt-2'></FaPhone> <p className='text-black mx-2'>01889977112</p>
                </div>


            </div>
        </div>
    );
};

export default GetInTouch;