import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (

        <div className="box img-hover-zoom  img-hover relative mb-3">
            <img src={service.img} className="h-96  w-full relative" alt="" />

            <p className='text-white absolute bottom-10 left-5 text-xl  name capitalize' >{service.name}</p>
            <p className='text-white absolute -bottom-8 right-2 mr-2 text-end text-xs uppercase explore flex items-center gap-1'>Expolore<BsArrowRightShort size={20} /></p>

        </div>

    );
};

export default ServiceCard;