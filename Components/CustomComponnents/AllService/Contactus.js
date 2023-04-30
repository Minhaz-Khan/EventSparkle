import React from 'react';
import {FaPhone} from 'react-icons/fa';

const Contactus = () => {
    return (
        <div>
            <div className='w-[320px] h-[280px] p-8 mx-auto bg-slate-300 shadow-lg'>
                <p className='text-black text-[24px]'>Contact us for help?</p>
                <p className='text-[#777676]'>Contact with us through our representative or submit a business inquiry online.</p>

                <div className='flex align-middle'>
                    <p className='text-black text-[22px]'>Contact</p>
                    <FaPhone className='text-black mx-2 mt-2'></FaPhone>
                </div>
            </div>
        </div>
    );
};

export default Contactus;