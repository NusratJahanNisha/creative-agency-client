
// --------------------------------------ALL THE SERVICES OF HOME PAGE------------------------

import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';
import './ServiceSection.css';

const ServiceSection = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:9000/service`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []
    )

    return (
        <div style={{ margin: "50px", marginBottom: "1000px" }}>
            {
                services.map(service => <ServiceDetails service={service} ></ServiceDetails>)
            }
        </div>
    );
}

export default ServiceSection;