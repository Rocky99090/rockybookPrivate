import React, { Fragment, useEffect, useState } from 'react';
import aboutBgImg from '../../../../assets/img/logo/rocky-r.png'
import About from '../../../Utilities/About/About';
import Services from '../../../Utilities/Services/Services';
import Cta from '../../../Utilities/Cta/Cta';
import Matches from '../../../Utilities/Matches/Matches';
import BlogOne from '../../../Utilities/Blog/BlogOne/BlogOne';
import HeroOne from '../../../Utilities/Hero/HeroOne/HeroOne';
import WorkGallery from '../../../Utilities/WorkGallery/WorkGallery';
import Instagram from '../../../Utilities/Instagram/Instagram';
import Faqs from '../../Faq/Faq';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import LiveStreamingVideo from '../../../Utilities/LiveStreamingVideo/LiveStreamingVideo';
import LiveStreamingVideoTwo from '../../../Utilities/LiveStreamingVideo/LiveStreamingVideoTwo/LiveStreamingVideoTwo';
import BlogThree from '../../../Utilities/Blog/BlogThree/BlogThree';
import BlogTwo from '../../../Utilities/Blog/BlogTwo/BlogTwo';
import Countdown from '../../../Utilities/Matches/countdown';
import UpcomingSeries from '../../../Utilities/Matches/upcomingSeries';
import HeroThree from '../../../Utilities/Hero/HeroThree/HeroThree';
import HeroTwo from '../../../Utilities/Hero/HeroTwo/HeroTwo';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Box, Fab } from '@mui/material';
import { Helmet } from 'react-helmet';

const Home = () => {
    const openWhatsapp = () => {
        window.location.href = "https://wa.link/rockywebsite?text=I want Id"
    }

    return (
                <Fragment>
                       <Helmet>
        <title>Best Online Cricket ID Provider in India | Rocky Book</title>
        <meta name="keywords" content="best betting sites in India, cricket betting sites, best online betting sites India, top betting sites in India, fantasy sports sites in India, top sports websites in India, India's no.1 book, trusted cricket betting sites in India, India no 1 betting site, best legal betting sites, Online Gambling Sites, rocky book, best online gaming platform in India" />
       <meta name="title" content="Rocky Book - Best Online Cricket Betting Sites in India" />
      
        <meta name="description" content="Best Online Gaming Platforms in India - Discover the best online gaming platform in India with Rocky Book. Enjoy a wide range of thrilling games, seamless betting experience." />
        {/* Other meta tags */}
      </Helmet>
                <Box
  sx={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    '& > :not(style)': { m: 1 },
    zIndex: 1000 // Adjust the z-index as needed
  }}
>
  <Fab onClick={openWhatsapp} style={{backgroundColor:"green"}} aria-label="add">
  <i class="fab fa-whatsapp" style={{fontSize:"30px"}}></i>
  </Fab>
</Box>

            {/* Hero Component */}
            
            <HeroThree />
            {/* About Component */}
            <About />
            <UpcomingSeries />
            <Matches />
            <Countdown />
            <Services />
            {/* Gallery Component */}
            <WorkGallery/>
            
            {/* Cta Component */}
            <Instagram/>
            <Cta />
            {/* Match Component */}
            {/* <LiveStreamingVideoTwo/> */}
            {/* Blog Component */}
            <BlogOne />
            <BlogThree />
            <Faqs />
            

        </Fragment>
    );
}

export default Home;