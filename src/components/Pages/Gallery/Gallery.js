import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../Utilities/Breadcrumb/Breadcrumb';

import img1 from '../../../assets/img/gallery/andarbahar.jpeg';
import img2 from '../../../assets/img/gallery/boardgame.jpeg';
import img3 from '../../../assets/img/gallery/casino.jpeg';
import img4 from '../../../assets/img/gallery/cricket.jpeg';
import img5 from '../../../assets/img/gallery/dice.jpeg';
import img6 from '../../../assets/img/gallery/soccer.jpeg';
import img7 from '../../../assets/img/gallery/teenpatti.jpeg';
import img8 from '../../../assets/img/gallery/tennis.jpeg';
import ReactPlayer from 'react-player/youtube'
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import thumbnail from "../../../assets/img/logo/logo-01.png"
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';
import HeroThree from '../../Utilities/Hero/HeroThree/HeroThree';
const videoUrls = [
    "https://www.youtube.com/watch?v=oXBj9528a9M",
    "https://www.youtube.com/watch?v=oXBj9528a9M",
    "https://www.youtube.com/watch?v=oXBj9528a9M",
    "https://www.youtube.com/watch?v=oXBj9528a9M",
    "https://www.youtube.com/watch?v=oXBj9528a9M",
    "https://www.youtube.com/watch?v=oXBj9528a9M"
  ];
const galleryImgs = [
    {
        id: '1',
        thumb: img1
    },
    {
        id: '2',
        thumb: img2
    },
    {
        id: '3',
        thumb: img3
    },
    {
        id: '4',
        thumb: img4
    },
    {
        id: '5',
        thumb: img5
    },
    {
        id: '6',
        thumb: img6
    },
    {
        id: '7',
        thumb: img7
    },
    {
        id: '8',
        thumb: img8
    },
]
const Gallery = () => {
    return (
        <React.Fragment>

            {/* Breadcrumb */}
            <HeroThree />
            {/* Gallery */}
            <section id="work" >
                <div className="container  pb-50 ">
                    <div className="portfolio">
                    <div className="col-lg-12 p-relative  text-center">
                        <SectionTitle titlefirst='Our' titleSec='Games' />
                    </div>
                        <div className="grid col4">
                            {
                                galleryImgs.map(data => {
                                    const { id, thumb } = data;
                                    return (
                                        <div className="grid-item p-relative" key={id}>
                                            <div className="box">
                                                    <img src={thumb} alt="protfolio" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* <div className="col-lg-12 p-relative pt-70 text-center">
                        <SectionTitle titlefirst='Loved BY CELEBRITIES' titleSec='CELEBRITIES' />
                    </div>
                <Box sx={{ flexGrow: 1 }} >
                                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                    {videoUrls.map((url, index) => (
                                        <Grid   xs={2} sm={4} md={4} key={index} marginBottom={"30px"}>
                                            <ReactPlayer width={'max-width'} style={{margin:"10px"}} playing = {false} controls = {true}  url={url} />
                                        </Grid>
                                        ))}
                                    </Grid>
                                </Box> */}
                </div>
            </section>

        </React.Fragment>
    );
}

export default Gallery;