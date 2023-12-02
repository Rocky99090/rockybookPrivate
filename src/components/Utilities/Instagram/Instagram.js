import React, { useState, useEffect } from 'react';
import brand1 from '../../../assets/img/gallery/playingsite1.png';
import brand2 from '../../../assets/img/gallery/playingsite2.png';
import brand3 from '../../../assets/img/gallery/playingsite3.png';
import brand4 from '../../../assets/img/gallery/playingsite4.png';
import brand5 from '../../../assets/img/gallery/playingsite5.png';
import brand6 from '../../../assets/img/gallery/playingsite6.png';
import SectionTitle from '../SectionTitle/SectionTitle';
import matchBgImg from '../../../assets/img/slider/hero12.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const igData = [
    {
        id: '1',
        thumb: brand1
    },
    {
        id: '2',
        thumb: brand2
    },
    {
        id: '3',
        thumb: brand3
    },
    {
        id: '4',
        thumb: brand4
    },
    {
        id: '5',
        thumb: brand5
    },
    {
        id: '6',
        thumb: brand6
    },
]

const Instagram = () => {
    const [slidesToShow, setSlidesToShow] = useState(1);
    useEffect(() => {
        // Update the number of slidesToShow based on the viewport width
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSlidesToShow(2); // Mobile view
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
      const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        speed: 2500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
    };
    return (
        <section className="insg-area p-relative fix pt-0 mb-0 pb-0" style={{ background: `url(${matchBgImg}) no-repeat center/cover`, backgroundBlendMode:'overlay',backgroundColor:'rgba(0,0,0,0.6)' }}>
            <div className="container-fliud">
                <div className="row align-items-center">
                <div className="col-lg-12">
                        {/* Section title */}
                        <SectionTitle
                            titlefirst={'INDIA NO 1 BETTING SITE'}
                            titleSec={'& TRUSTED EXCHANGE'}
                            className={'text-center'} />
                    </div>

                    <div className="col-lg-12 p-0">
                        <div className="insg-grid">
                            
                            <Slider {...settings}>
                                {
                                    igData.map(data => {
                                        return (
                                            <li key={data.id}>
                                                <div className="insg-tumb  p-relative text-center ">
                                                    <div className="img" style={{width:"200px"}}>
                                                       <a href='#'> <img src={data.thumb} alt="circle_left" /></a>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                                </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Instagram;