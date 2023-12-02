import React, { useState } from 'react';
import { Link } from "react-router-dom";

import bgImg from '../../../assets/img/slider/hero-9.jpg';


import SectionTitle from '../SectionTitle/SectionTitle';
import LiveStreamingVideo from '../LiveStreamingVideo/LiveStreamingVideo';

import workImg1 from '../../../assets/img/gallery/boardgame.jpeg';
import workImg2 from '../../../assets/img/gallery/andarbahar.jpeg';
import workImg3 from '../../../assets/img/gallery/cricket.jpeg';
import workImg4 from '../../../assets/img/gallery/casino.jpeg';
import workImg5 from '../../../assets/img/gallery/soccer.jpeg';
import workImg6 from '../../../assets/img/gallery/dice.jpeg';
import workImg7 from '../../../assets/img/gallery/teenpatti.jpeg';
import workImg8 from '../../../assets/img/gallery/tennis.jpeg';

const galleryItems = [
    {
        img: workImg1,
        tag: 'new',
        label: 'Board games',
        description: 'we have the best board games.',
        cat: 'Board games',
    },
    {
        img: workImg2,
        tag: 'new',
        label: 'Andar Bahaar',
        description: 'Lets play AndarBahaar with us',
        cat: 'Origin',
    },
    {
        img: workImg3,
        tag: 'New',
        label: 'Cricket',
        description: 'Win big with us while Playing cricket',
        cat: 'Cricket',
    },
    {
        img: workImg4,
        tag: 'New',
        label: 'Casino',
        description: 'Try your luck on live casinos with us.',
        cat: 'Playstation',
    },
    {
        img: workImg5,
        tag: 'New',
        label: 'Soccer',
        description: 'Try your soccer luck with us while playing big.',
        cat: 'New',
    },
    {
        img: workImg6,
        tag: 'new',
        label: '7 Up & Down',
        description: "Don't miss this opportunity to win big. ",
        cat: 'new',
    },
    {
        img: workImg7,
        tag: 'New',
        label: 'Teen Patti',
        description: 'Enjoy playing Teen Patti With Us',
        cat: 'New',
    },
    {
        img: workImg8,
        tag: 'New',
        label: 'Tennis',
        description: 'bet on Tennis games and win big',
        cat: 'New',
    },
]

const WorkGallery = () => {
    const [items, setItems] = useState(galleryItems);


    const fliterItem = (cat) => {
        const filterUpdate = galleryItems.filter((currentItem) => {
            return currentItem.cat === cat;
        })
        setItems(filterUpdate);
    }
    const openWhatsapp = () => {
        window.location.href = "https://wa.link/rockywebsite?text=I want Id"
    }

    return (
        <section id="work" className="pt-0 pb-10" style={{ background: `url(${bgImg}) no-repeat center/cover`, backgroundBlendMode:'overlay',backgroundColor:'rgba(0,0,0,0.8)' }}>
            <div className="container ">
                <div className="portfolio ">
                    <div className="row align-items-center mb-0 wow fadeInUp animated" data-animation="fadeInRight" data-delay=".4s">
                        <div className="col-lg-12 text-center">
                            <SectionTitle
                                titlefirst='EXPLORE AND ENGAGE IN THE'
                                titleSec='GAME OF YOUR CHOICE' />
                        </div>
                    </div>
                    <div className="grid col4 ">
                        {
                            items.map(item => {
                                const { id, img, tag, label, description } = item
                                return (
                                    <div className="grid-item" key={id}>
                                            <figure className="gallery-image">
                                                <img src={img} alt="img" className="img" />
                                                <figcaption>
                                                    <span>{tag}</span>
                                                    <h4>{label}</h4>
                                                    <p>{description}</p>
                                                </figcaption>
                                            </figure>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="slider-btn " style={{display:"flex", justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                    <a onClick={() => openWhatsapp()} className="btn  ss-btn mt-20 wow fadeInDown animated" data-animation="fadeInRight"  data-delay=".4s">Play Now</a>
                    </div>
                </div>
            </div>
           
        </section>
    );
}


export default WorkGallery;
