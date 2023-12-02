import React, { useState, useEffect } from 'react';
import bgImg from '../../../../assets/img/gallery/coin_with_bg.png';
import blogImg1 from '../../../../assets/img/gallery/guarantee3.jpeg';
import blogImg2 from '../../../../assets/img/gallery/gurantee2.jpeg';
import blogImg3 from '../../../../assets/img/gallery/guarantee4.jpeg';
import blogImg4 from '../../../../assets/img/gallery/guarantee1.jpeg';
import BlogCard from "../BlogCard";
import SectionTitle from '../../SectionTitle/SectionTitle';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newz from 'timely-newz';

const blogData = [
    {
        id: '1',
        thumb: blogImg1,
       },
    {
        id: '2',
        thumb: blogImg2,
       },
    {
        id: '3',
        thumb: blogImg3,
         },
    {
        id: '4',
        thumb: blogImg4,
         },
];
const BlogOne = () => {
    useEffect(() => {
        const specs = {
          lang: 'en',
          category: '',
          count: 2
        };
    
        newz.getNewz(specs, function (result) {
          console.log(result);
        });
      }, []);
  
    const [slidesToShow, setSlidesToShow] = useState(1);
    useEffect(() => {
        // Update the number of slidesToShow based on the viewport width
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSlidesToShow(1); // Mobile view
          } else {
            setSlidesToShow(2); // Laptop view
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
        speed: 1500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
    };
    return (
        <section id="blog" className="blog-area  p-relative pt-10  fix" style={{ background: `url(${bgImg}) no-repeat right bottom` }}>
            <div className="container">
            <div className="row align-items-center mb-0 wow fadeInUp animated" data-animation="fadeInRight" data-delay=".4s">
                        <div className="col-lg-12 text-center">
                            <SectionTitle
                                titlefirst='THE ROCKY GUARANTEE'
                                titleSec=' WITHDRAWAL IN 60 MINUTES - OR ELSE MONEY DOUBLE' />
                        </div>
                    </div>
                    
                    <Slider {...settings}>
                                {
                                    blogData.map(data => {
                                        return (
                                            // <div className="text-center " key={data.id}>
                                            //     <div className="insg-tumb  p-relative text-center ">
                                            //         <div className="img" style={{width:"200px"}}>
                                            //            <a href='#'> <img src={data.thumb} alt="circle_left" /></a>
                                            //         </div>
                                            //     </div>
                                            // </div>
                                            <div className="text-center " style={{margin :"10px"}} key={data.id}>

                                            <div className="s-video-wrap " style={{ background: `url(${data.thumb}) no-repeat center/cover`,height:"500px",width:"450px"}}>
                                               
                                                </div>
                                                
                                            </div>
                                            
                                        );
                                    })
                                }
                    </Slider>
            </div>

        </section>
    )
}
export default BlogOne;
