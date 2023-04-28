import React from 'react';
import './ServiceCard.css';
import ServiceCard from './ServiceCard';


const services = [

    {
        img: 'https://webredox.net/demo/wp/florya/wp-content/uploads/2022/11/1-1.jpg',
        name: <em> wedding planing</em>
    },
    {
        img: 'https://webredox.net/demo/wp/florya/wp-content/uploads/2022/11/5.jpg',
        name: <em> BirthDay</em>
    },
    {
        img: 'https://webredox.net/demo/wp/florya/wp-content/uploads/2022/11/6.jpg',
        name: <em> wedding</em>
    },
];
const ServiceSection = () => {
    return (
        <>
            <p className="text-center text-4xl uppercase text-text_Primary mb-3 font-bold
            ">our best service</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5 lg:max-w-5xl p-3">
                {
                    services.map((service, ind) => <ServiceCard key={ind} service={service} />)
                }
            </div>

        </>
    );
};

export default ServiceSection;