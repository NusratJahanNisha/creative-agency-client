
// --------------------------------------CAROUSEL OF HOME PAGE------------------------

import React from 'react';

const Carousel = () => {
    const Carousel = require('3d-react-carousal').Carousel;
    let slides = [
        <img src="https://i.ibb.co/hMjTfTc/carousel-1.png" alt="1" />,
        <img src="https://i.ibb.co/r31R31m/carousel-2.png" alt="2" />,
        <img src="https://i.ibb.co/ckB2v1M/carousel-3.png" alt="3" />,
        <img src="https://i.ibb.co/Yt25TFw/carousel-4.png" alt="4" />
    ];


    return (
        <div   >
            <div style={{ background: "#111430", height: "140vh" }} >
                <h3 style={{ textAlign: "center", margin: "50px", padding: "50px", marginTop: "300px" }} ><b style={{ color: "white" }}>Here are some of <span style={{ color: "#75AA57" }}>our work</span> </b> </h3>
                <div style={{ height: "50vh", background: "#111430" }}>
                    <Carousel slides={slides} autoplay={false} interval={1000} />
                </div>
            </div>
        </div>
    );
};

export default Carousel;