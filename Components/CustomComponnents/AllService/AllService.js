'use client'
import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import Image from 'next/image';
import pic1 from '../../../public/bg2.jpg'
import pic2 from '../../../public/bg3.png'

import { FaLocationArrow, FaRocketchat, FaPhone, FaGreaterThan } from 'react-icons/fa';
import Contactus from './Contactus';
import GetInTouch from './GetInTouch';



const AllService = () => {

    const [data, setData] = useState([])
    const [selectedData, setSelectedData] = useState(null);



    useEffect(() => {
        async function fetchData() {
            if (selectedData) {
                const response = await fetch(selectedData);
                const data = await response.json();
                setData(data);
                return;
            }
            else {
                const response = await fetch('WedPhoto.json');
                const data = await response.json();
                setData(data);
            }
        }
        fetchData();
    }, [selectedData]);


    return (
        <div className='bg-white'>
            <div className='w-full h-full mb-10 relative inline-block'>
                
                <img src='https://i.ibb.co/N143T5d/bg2.jpg'></img>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className='text-5xl font-bold font-serif text-white'>Service Category</p>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="... pt-5">
                    <div className='w-11/12 mx-auto text-center mb-10'>

                        <button onClick={() => setSelectedData("WedPhoto.json")} className='my-[1px] p-4 w-4/5  font-bold bg-[#5a9a79] text-white hover:bg-[#507a6494] active:bg-slate-300'>Wedding Photography</button>

                        <button onClick={() => setSelectedData("WeddingArg.json")} className='my-[2px] p-4 w-4/5 font-bold bg-[#5a9a79] text-white hover:bg-[#507a6494]'>Wedding Arrangement</button>

                        <button onClick={() => setSelectedData("Event.json")} className='my-[1px] p-4 w-4/5 font-bold bg-[#5a9a79] text-white hover:bg-[#507a6494]'>Event Arrangement</button>

                        
                    </div>

                    <div>
                        <img src='https://i.ibb.co/3M7MhK0/bg3.png' alt='ere' className='h-[422px] w-[304px] mx-auto mb-10'></img>
                    </div>

                    <GetInTouch></GetInTouch>


                    <Contactus></Contactus>
                </div>






                <div className="col-span-2 ...">

                    <div >

                        <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>

                            
                            {
                                data.map((singleCompany) => <CompanyCard
                                    key={singleCompany._id}
                                    singleCompany={singleCompany}
                                ></CompanyCard>)
                            }

                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default AllService;