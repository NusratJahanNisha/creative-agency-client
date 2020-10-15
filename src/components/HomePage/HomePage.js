import React from 'react';
import Carousel from '../Carousel/Carousel';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LogoSection from '../LogoSection/LogoSection';
import ServiceSection from '../ServiceSection/ServiceSection';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <LogoSection></LogoSection>
            <ServiceSection></ServiceSection>
            <Carousel></Carousel>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;