import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../../assets/img/slider/hero-8.jpg';
const ctaData = {
    bg: bgImg,
    title: 'BEST ONLINE GAMING PLATFORM IN INDIA ',
    description: 'Click on the Button Below and Get your ID now',
    btn: 'Join Now',
}
const Cta = () => {
    
const [hidden, setHidden] = useState(false);
    const { bg, title, description, btn } = ctaData;
    const openWhatsapp = () => {
        window.location.href = "https://wa.link/rockywebsite?text=I want Id"
    }
    return (
        <section id="graph" className="features-area pt-10 pb-10" style={{ background: `url(${bg}) no-repeat center/cover`, backgroundBlendMode:'overlay',backgroundColor:'rgba(0,0,0,0.8)' }}>
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-lg-12 col-md-12">
                        <div className="section-title cta-title  mb-20 wow fadeInUp animated" data-animation="fadeInRight" data-delay=".4s">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-11">
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="slider-btn">
                            <a onClick={() => openWhatsapp()} className="btn ss-btn mt-20 wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">{btn}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;