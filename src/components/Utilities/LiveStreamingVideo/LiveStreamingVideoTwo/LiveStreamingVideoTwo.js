// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import SectionTitle from '../../SectionTitle/SectionTitle';
// import vdeoImg1 from '../../../../assets/img/bg/video-img8.png';
// import vdeoImg2 from '../../../../assets/img/bg/video-img9.png';
// import vdeoImg3 from '../../../../assets/img/bg/video-img10.png';

// const videoData = [
//     {
//         id: '1',
//         thumb: vdeoImg1,
//         url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
//         label: 'Watch Dogs 2',
//         description: 'Duis aute irure dolor'
//     },
//     {
//         id: '2',
//         thumb: vdeoImg2,
//         url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
//         label: 'Watch Dogs 2',
//         description: 'Duis aute irure dolor'
//     },
//     {
//         id: '3',
//         thumb: vdeoImg3,
//         url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
//         label: 'Watch Dogs 2',
//         description: 'Duis aute irure dolor'
//     },
//     {
//         id: '6',
//         thumb: vdeoImg1,
//         url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
//         label: 'Watch Dogs 2',
//         description: 'Duis aute irure dolor'
//     },
//     {
//         id: '7',
//         thumb: vdeoImg2,
//         url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
//         label: 'Watch Dogs 2',
//         description: 'Duis aute irure dolor'
//     },
//     {
//         id: '8',
//         thumb: vdeoImg3,
//         url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
//         label: 'Watch Dogs 2',
//         description: 'Duis aute irure dolor'
//     },
//     {
//         id: '4',
//         thumb: vdeoImg1,
//         url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
//         label: 'Watch Dogs 2',
//         description: 'Duis aute irure dolor'
//     },
// ]



// const LiveStreamingVideoTwo = () => {
// const [slidesToShow, setSlidesToShow] = useState(1);
// useEffect(() => {
//     // Update the number of slidesToShow based on the viewport width
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setSlidesToShow(1); // Mobile view
//       } else {
//         setSlidesToShow(3); // Laptop view
//       }
//     };
//     handleResize();

//     // Update slidesToShow on window resize
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     pauseOnHover: true,
//     speed: 500,
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//   };
//     return (
//         <section className="video-area p-relative pt-20 pb-20 fix">
//             <div className="container">
//                 <div className="row align-items-center">
//                     <div className="col-lg-12 text-center">
//                         {/* Section title */}
//                         <SectionTitle titlefirst='Loved By' titleSec='Celebrities' />
//                     </div>
//                 </div>
//             </div>
//             <div className="container-fluid">
//                 <div className="row align-items-center">
//                     <div className="col-lg-12">
//                         <div className="vedio video-active2 pb-0  wow fadeInUp animated" data-animation="fadeInRight" data-delay=".4s">
//                             <Slider {...settings}>
//                                 {
//                                     videoData.map(data => {
//                                         const { id, thumb, url, label, description } = data;
//                                         return (
//                                             <div className="video-grid px-2" key={id}>
//                                                 <div className="video-full-img  p-relative ">
//                                                     <img src={thumb} alt="circle_left" />
//                                                     <div className="play-btn">
//                                                         <Link to={url} className="popup-video mb-50">
//                                                             <i className="flaticon-play-button"></i>
//                                                         </Link>
//                                                         <h4>{label}</h4>
//                                                         <p>{description}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })
//                                 }
//                             </Slider>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
// export default LiveStreamingVideoTwo;