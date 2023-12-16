import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import logo from '../../../assets/img/logo/logo-01.png';
import toggolIcon from '../../../assets/img/bg/toggle-menu.png';
import Offcanvas from '../Offcanvas/Offcanvas';



const Header = () => {

    const [openCanvas, setOpenCanves] = useState(false);

    const [iconToggle, setIconToggle] = useState(false);

    const heandelOpen = () => {
        setOpenCanves(!openCanvas);
    }


    return (
        <React.Fragment>
            <header className='header-area header-three p-relative'>
                <div id="header-sticky" className="menu-area">
                    <div className="container-fluid pl-50 pr-50">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-1 col-lg-1 col-6">
                                    <div className="logo">
                                        <Logo logo={logo} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block offset-lg-2">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-sub">
                                                    <Link to={'/'}>{'Home'}</Link>
                                                </li>
                                                <li><Link to={'/about-us'}>{'About Us'}</Link>
                                                </li>
                                                <li><Link to={'/blogs'}>{'Blogs'}</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 text-left d-none d-lg-block mt-30 mb-30">
                                    <div className="cart-top">
                                        <ul>
                                            <li>
                                                <a rel="nofollow" href='https://www.instagram.com/rockybook2121/'>
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                            <a rel="nofollow" href='https://t.me/rockybook2121'>
                                                    <i className="fab fa-telegram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 d-block d-lg-none">

                                    <div className="mobile-toggler text-right">
                                        <a onClick={() => setIconToggle(!iconToggle)}>
                                            <i className={`${iconToggle ? 'fas fa-times' : 'fa fa-bars'}`}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MobileMenu toggleMenu={iconToggle} onClose={setIconToggle} />
                    </div>
                </div>
            </header>
            <Offcanvas onOpne={openCanvas} onClose={setOpenCanves} />

        </React.Fragment>
    )
}

export default Header;
