import React from 'react';
import Image from 'next/image';

import { FaStar } from 'react-icons/fa';

const CompanyCard = ({ singleCompany }) => {

    const { service_name, company_name, saler_email, details, pic, price, rating } = singleCompany
    return (
        <div>

            <div className="relative h-[450px] w-[350px]">
                <img src={pic} className="absolute inset-0 w-full h-full object-cover" alt="Image" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#5a9a79] bg-opacity-70 px-4 py-2 text-center">
                    <p className="text-white font-bold text-[18px] mb-2">{service_name}</p>


                    <div className='text-start'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <FaStar className='text-yellow-400 text-[14px]'></FaStar>
                                <FaStar className='text-yellow-400 text-[14px]'></FaStar>
                                <FaStar className='text-yellow-400 text-[14px]'></FaStar>
                                <FaStar className='text-yellow-400 text-[14px]'></FaStar>
                                <FaStar className='text-yellow-400 text-[14px]'></FaStar>

                                <p className='w-10 text-[14px] ml-4 font-semibold bg-slate-400 text-center rounded text-white'>{rating}</p>
                            </div>

                            <div>
                            <p className='w-14 text-[14px] font-semibold bg-slate-400 text-center rounded text-white'>{price}$</p>
                            </div>


                        </div>

                        <p className='text-white text-[14px] font-semibold'><span className='font-semibold text-black'>Comapny Name :</span> {company_name}</p>

                        <div className='flex text-[14px] font-semibold'>
                            <p className='text-black font-semibold'>Details:</p>
                            <p className='text-white ml-2'> {details.slice(0, 45)}...<span className='text-black underline'>See More</span></p>
                        </div>

                    </div>

                    <div className='m-4 text-end'>
                        <button className='w-[60px] rounded font-semibold bg-white text-black hover:bg-[#507a6494] active:bg-slate-300'>Visit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};



export default CompanyCard;