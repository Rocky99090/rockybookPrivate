import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse } from 'react-bootstrap';
import './MobileMenu.js';

class MobileMenu extends Component {

    state = {
        isOpen: false,
        isOpenTwo: false,
    }

    isDropDownOpenOne = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            isOpenTwo: false
        })
    }

    isDropDownOpenTwo = () => {
        this.setState({
            isOpen: false,
            isOpenTwo: !this.state.isOpenTwo
        })
    }


    render() {

        const { isOpen, isOpenTwo } = this.state;

        return (
            <div>
                <div className={`mobile-menu ${this.props.toggleMenu ? 'mobile-menu-active' : ''}`}>
                    <ul className="mean-nav">
                        <li onClick={() => this.props.onClose(false)}>
                            {'Home'}
                        </li>
                        <li>
                            <Link onClick={() => this.props.onClose(false)}
                                to={'/about-us'}>
                                {'About Us'}
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => this.props.onClose(false)}
                                to={'/blogs'}>
                                {'Blog'}
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}
export default MobileMenu;