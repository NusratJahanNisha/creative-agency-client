
// -------------------------------------DETAILS OF THE SERVICE WHICH USER TOOK------------------------

import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ServiceContext, UserContext } from '../../App';
import './ServiceDetails.css';
import './logoAnimation.css';


const ServiceDetails = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch("http://localhost:9000/isAdmin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            })
    }, [])

    const { name, description, image  } = props.service;

    const [serviceDetails, setServiceDetails] = useContext(ServiceContext);
    const history = useHistory()


    const handleOrder = () => {
    
        if (isAdmin === true) {
            history.push(`/addService`);
            console.log(isAdmin);
        }
        else {
            history.push(`/finalOrder`);
            console.log(isAdmin);
        }


        const serviceInfo = {
            serviceName: name,
            serviceDetails: description,
            servicePrice: 110,
            serviceImage: image
        }
        setServiceDetails(serviceInfo);

    }


    return (
        <section>
            <div onClick={handleOrder} class="servicesDetails" style={{
                border: "white", padding: "27px",
                float: "left",
                height: "370px",
                width: "30%"
            }}>
                
                <div className="logoAnimation card-img-top mx-auto d-block">
                    <img style={{height:"70px", width:"120px",width:"50%"}} src={`data:image/png;base64,${image.img}`} alt="..." />
                </div>

                <div>
                    <h3 style={{ textAlign: "center" }}>{name}</h3>
                    <p class="text-secondary">{description}</p>
                </div>
            </div>
        </section>

    );
};

export default ServiceDetails;