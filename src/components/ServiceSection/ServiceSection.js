import React from 'react';
import ServiceDetails from './ServiceDetails';
import './ServiceSection.css';

const ServiceSection = () => {
    const services =[
        {
            serviceName: "Web & Mobile Design", 
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet doloribus totam a velit, facere cum placeat perferendis expedita iure odit rem consectetur culpa saepe, aliquam voluptate praesentium odio quo reiciendis.",
             image: "https://i.ibb.co/QbYpDQQ/customer-1.png" ,
             price: 100
    },
    {
        serviceName: "Graphic Design", 
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet doloribus totam a velit, facere cum placeat perferendis expedita iure odit rem consectetur culpa saepe, aliquam voluptate praesentium odio quo reiciendis.",
        image: "https://i.ibb.co/QbYpDQQ/customer-1.png",
        price: 110
    },
{
    serviceName: "Web development", 
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet doloribus totam a velit, facere cum placeat perferendis expedita iure odit rem consectetur culpa saepe, aliquam voluptate praesentium odio quo reiciendis.",
    image: "https://i.ibb.co/QbYpDQQ/customer-1.png" ,
    price: 120
},
{
    serviceName: "Web development", 
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet doloribus totam a velit, facere cum placeat perferendis expedita iure odit rem consectetur culpa saepe, aliquam voluptate praesentium odio quo reiciendis.",
    image: "https://i.ibb.co/QbYpDQQ/customer-1.png" ,
    price: 130
}
    ]
    return (
<div style={{margin:"50px",marginBottom:"1000px"}}>
    {
        services.map(service => <ServiceDetails service={service} ></ServiceDetails> )
    }


        </div>
    );
};

export default ServiceSection;