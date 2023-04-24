import React from 'react';
import { ImArrowRight2 } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { MdCake } from 'react-icons/md';
import './ServiceCard.css';
import ServiceCard from './ServiceCard';

const serviceList = [
    {
        name: 'Wedding',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        icon: <MdCake className=' text-black' />
    },
    {
        name: 'Birthday',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        icon: <MdCake className=' text-black' />
    },
    {
        name: 'Family Party',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        icon: <MdCake className=' text-black' />
    }
];

const ServiceSection = () => {
    return (
        <>
            <h2 className='text-center font-bold
          text-3xl uppercase'>Our Best Service</h2>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    serviceList.map((service, ind) => <ServiceCard key={ind} service={service} />)
                }

            </div>
            <button className='block w-full text-center font-bold
          text-3xl uppercase my-10'>ALL Service</button>
        </>
    );
};

export default ServiceSection;