import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ServiceContext, UserContext } from '../../App';
import './ServiceDetails.css';

const ServiceDetails = (props) => {
    const { serviceName, image, details, price } = props.service;
    const history = useHistory()
    const [serviceDetails, setServiceDetails] = useContext(ServiceContext);

    const handleOrder = () => {
        history.push(`/finalOrder`);
        console.log(serviceName, image, details, price)
        const serviceInfo = {
            serviceName: serviceName,
            serviceImage: image,
            serviceDetails: details,
            servicePrice: price
        }
        setServiceDetails(serviceInfo);

    }





    return (
        // <div className="row" class="services"  >
        //     <div className="col-md-4" style={{ padding: "25px" }} >
        //         <img style={{ width: "50%", height: "70px", width: "70px", marginLeft: "70px" }} src={image} alt="" />
        //         <h3>{serviceName}</h3>
        //         <p class="text-secondary">{details}</p>
        //     </div>

        // </div>


        <section>
            <div onClick={handleOrder} class="servicesDetails" style={{
                border: "white", padding: "27px",
                float: "left",
                height: "370px",
                width: "30%"
            }}>
                <img src={image} style={{ width: "50%", height: "70px", width: "70px" }} class="card-img-top mx-auto d-block" alt="..." />
                <div>
                    <h3 style={{ textAlign: "center" }}>{serviceName}</h3>
                    <p class="text-secondary">{details}</p>
                </div>
            </div>
        </section>

    );
};

export default ServiceDetails;