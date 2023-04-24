import React from 'react';
import { ImArrowRight2 } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';

const ServiceCard = ({ service }) => {
    return (

        <div className='box   p-4 shadow-lg relative'>
            <div className='border  p-4 items-center'>
                <div className='flex justify-center items-center'>
                    <div className="circle-wrapper">
                        <div className="success circle"></div>
                        <div className="icon">
                            {service.icon}
                        </div>
                    </div>
                </div>
                <div className="content text-center my-10">
                    <h2 className='font-bold text-xl uppercase'>{service.name}</h2>
                    <p className='text-sm'>{service.text}</p>
                </div>
            </div>

            <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 '>
                <div className='btn h-14 w-14 m-auto bg-slate-300 rounded-full '>
                    <div className='flex justify-center items-center w-full h-full'>
                        <div className='btn2 h-10 w-10 m-auto bg-black rounded-full'>
                            <div className='flex h-full items-center justify-center'>
                                <ImArrowRight2 className=' text-white z-10' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;