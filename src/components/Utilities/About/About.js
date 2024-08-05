import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
import experienceImg from '../../../assets/img/features/experience-years.png';
import features1 from '../../../assets/img/features/about-final.jpg';
import features2 from '../../../assets/img/features/about-final1.jpg';
import features3 from '../../../assets/img/features/about-img3.png';
import SectionTitle from '../SectionTitle/SectionTitle';
import reactVideo from '../../../assets/video-rocky.mp4'
import ReactPlayer from 'react-player'
import thumbnail from '../../../assets/img/thumb.jpeg'

const About = () => {
    const openWhatsapp = () => {
        window.location.href = "https://wa.link/rockywebsite?text=I want Id"
    }
    return (
        <section id="about" className="about-area about-p   pb-40 p-relative" style={{ background: `url(${aboutBgImg}) no-repeat center center / cover` }}>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="s-about-img p-relative wow fadeInLeft" data-wow-delay=".4s">
                            <div className="experience-years wow fadeInDown" data-wow-delay=".4s">
                                <img src={experienceImg} alt="Experience Years" />
                                <span>{'10'}</span>
                            </div>
                            <ReactPlayer
                                height={"700px"}
                                width={'100%'}
                                
                                url={reactVideo}
                                controls={true}
                                light={thumbnail} // Thumbnail image URL
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-content s-about-content wow fadeInRight" data-wow-delay=".4s">
                            <SectionTitle
                                titlethird={'We’re the best online gaming platform in India'}
                                className={'about-title second-title'}
                            />
                            <p><b>KHELO DUM PAR, JEETO BUMPER </b></p>
                            <p>Welcome to Rocky Book - the best betting site in India. At Rocky Book, we provide a diverse array of betting options, including sportsbooks, live cards, and live casinos.</p>
                            <p>The best online betting sites India, it is designed to meet the needs of every bettor, from beginners to experienced players. Whether you're passionate about sports betting, enjoy the strategy of live card games, or seek the excitement of live casino action, we have it all. </p>

                            <div className="about-content3 mt-30">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="green">
                                            <li>{'Instant Withdrawal & Deposit'}</li>
                                            <li>{'24 /7 Customer Service'}</li>
                                            <li>{'Referral Bonus'}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-btn2 mt-30">
                            <a onClick={() => openWhatsapp()} className="btn ss-btn">{'Play Now'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;