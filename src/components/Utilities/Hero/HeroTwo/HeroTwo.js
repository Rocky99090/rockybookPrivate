import { Link } from 'react-router-dom';
import heroImgWeb from '../../../../assets/img/slider/1920.2jpg.jpg';
import heroImg2 from '../../../../assets/img/slider/rocky2-m.jpeg';
import heroImg from '../../../../assets/img/slider/gallery1000.jpg';
import heroImgWeb2 from '../../../../assets/img/slider/rocky2.jpeg';
import sliderImg from '../../../../assets/img/slider/slider_img05.png';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const heroData = [{
    bgImg: heroImg,
}
]
const openWhatsapp = () => {
  window.location.href = "https://wa.link/rockywebsite?text=I want Id"
}

const MySlider = () => (
    <Carousel autoPlay showThumbs = {false} showStatus = {false}>
      <div>
        <img src={heroImg} alt="Slide 1" />
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
  const MySliderWeb = () => (
    <Carousel autoPlay showThumbs = {false} showStatus = {false}>
      <div>
        <img src={heroImgWeb} alt="Slide 1" />
      </div>

      {/* Add more slides as needed */}
    </Carousel>
  );
const HeroGallery = () => {
    const mobile = useMediaQuery('(max-width:792px)');
    const web = useMediaQuery('(min-width:793px)');
    const { bgImg, titleTag, title, btnText, sliderImg } = heroData;
    return (
        
        <>{mobile ?

        <section id="home" className="slider-area slider-four fix p-relative  pb-10">
             <ParallaxBanner onClick={() => openWhatsapp()} style={{ aspectRatio: '1 / 1', inset:"0px 0px", backgroundPosition: "center center", backgroundSize: "cover" }}>
                <ParallaxBannerLayer>
                    <MySlider />
                </ParallaxBannerLayer>
             </ParallaxBanner>
             
        </section>
        :
        web ?
        <section id="home" className="slider-area slider-four fix p-relative pb-1">
        <ParallaxBanner onClick={() => openWhatsapp()} style={{ aspectRatio: '2.5 / 1', inset:"0px 0px", backgroundPosition: "center center", backgroundSize: "cover", cursor:"pointer" }}>
           <ParallaxBannerLayer>
               <MySliderWeb />
           </ParallaxBannerLayer>
       </ParallaxBanner>
   </section>:""}
        </>
    );
}
export default HeroGallery;