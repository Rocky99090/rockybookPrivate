import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import logo from '../../../assets/img/logo/logo-01.png';

const Footer = () => {
    return (
        <footer className="footer-bg footer-p">
            <div className="footer-top pt-10">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title mb-20">
                                    <Link to={'/'}>
                                        <Logo logo={logo} />
                                    </Link>
                                </div>
                                <div className="footer-link">{'Privacy Policy Disclaimer - This game may be habit-forming or financially risky. Play responsibly'}</div>
                                


                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>{'Our Links'}</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><Link to={'/'}>{'Home'}</Link>
                                        </li>
                                        <li><Link to={'/about-us'}> {'About Us'}</Link>
                                        </li>
                                        <li><Link to={'/blogs'}> {'Blogs'} </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>{'Follow Us'}</h2>
                                </div>
                                <div className="footer-social "> 
                                <a rel="nofollow" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a rel="nofollow" href='https://t.me/rockybook2121'>
                                    <i className="fab fa-telegram"></i>
                                 </a>
                                <a rel="nofollow" href='https://www.instagram.com/rockybook2121/'>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {'Copyright © 2023'} <span>{'Rocky Book'}</span> {'All Rights Reserved RockyBook.'}
                        </div>
                        <div className="col-lg-6 text-right text-xl-right"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;