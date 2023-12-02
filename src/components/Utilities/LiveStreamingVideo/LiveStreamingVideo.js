import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import vdoImg1 from '../../../assets/img/bg/video-img.png';
import vdoImg2 from '../../../assets/img/bg/video-img2.png';



const LiveStreamingVideo = () => {
    const [slidesToShow, setSlidesToShow] = useState(1);
    useEffect(() => {
        // Update the number of slidesToShow based on the viewport width
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSlidesToShow(1); // Mobile view
          } else {
            setSlidesToShow(3); // Laptop view
          }
        };
    
        // Initial setting on component mount
        handleResize();
    
        // Update slidesToShow on window resize
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    const streamingData = [
        {
            id: '1',
            bgImg: vdoImg1,
            url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
            icon: 'fas fa-play',
            title: 'Checkout Live Streaming'
        },
        {
            id: '2',
            bgImg: vdoImg2,
            url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
            icon: 'fas fa-play',
            title: 'Checkout Live Streaming'
        },
        {
            id: '1',
            bgImg: vdoImg1,
            url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
            icon: 'fas fa-play',
            title: 'Checkout Live Streaming'
        },
        {
            id: '2',
            bgImg: vdoImg2,
            url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
            icon: 'fas fa-play',
            title: 'Checkout Live Streaming'
        }
    ]

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        speed: 1500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
      };
    
    return (
        <React.Fragment>
            <div className="vedio video-active pt-90">
            <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                        {/* Section title */}
                        <SectionTitle titlefirst='Loved By' titleSec='Celebrities' />
                    </div>
                </div>
                <Slider {...settings}>
                    {
                        streamingData.map(data => {
                            const { id, bgImg, url, icon, title } = data;
                            return (
                                <div className="text-center " key={id}>

                                    <div className="s-video-wrap " style={{ background: `url(${bgImg}) no-repeat center/cover` }}>
                                        <div className="s-video-content  ">
                                            <Link to={url} className="popup-video mt-20">
                                                <i className={icon}></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Slider>

            </div>
        </React.Fragment>
    );
}

export default LiveStreamingVideo;