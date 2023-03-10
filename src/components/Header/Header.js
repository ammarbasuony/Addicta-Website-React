import React, { Component } from 'react';
import Logo from '../../assets/img/icons/Addicta_logo.svg';
import LogoWhite from '../../assets/img/CaseStudy/Addicta_logo.svg';
import LogoWhiteOnly from '../../assets/img/CaseStudy/white-only.svg';
import LogoOnly from '../../assets/img/icons/logo-only.svg';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
    state = {
        fixed: '',
        fakeHeader: '',
        currentScrollHeight: 0,
        reference: 0
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        this.setState({
            reference: (document.documentElement.clientHeight / 3)
        });

        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 50) {
                this.setState({
                    fixed: 'fixed',
                    fakeHeader: 'fake-header'
                });
            } else {
                this.setState({
                    fixed: '',
                    fakeHeader: ''
                });
            }

            this.setState({
                currentScrollHeight: document.documentElement.scrollTop
            });
        });
    }


    render() {
        let num = 2.9;
        // if (window.innerWidth > 768) {
        //     num = 2.9;
        // } else if (window.innerWidth >= 500) {
        //     num = 2.5;
        // } else {
        //     num = 2.3;
        // }
        var currentBG = this.state.currentScrollHeight >= this.state.reference * num ? this.props.currentClass : '';
        return (
            <>
                <div className={`top-bar ${this.state.fixed} ${currentBG}`}>
                    <div className="left-gradient"></div>
                    <div className="container">
                        <nav>
                            <Link to="/">
                                <img className="logo-dark" src={Logo} alt="Addicta Logo" />
                                <img className="mobile-logo" src={LogoOnly} alt="Addicta Mobile Logo" />
                                <img className="logo-white" src={LogoWhite} alt="Addicta Light Logo" />
                                <img className="logo-white-only" src={LogoWhiteOnly} alt="Addicta Light Logo" />
                            </Link>
                            <ul className="navbar">
                                <li><Link className={this.props.current == "work" ? "active" : ''} to="/work">Work</Link></li>
                                <li><Link className={this.props.current == "about" ? "active" : ''} to="/about">About</Link></li>
                                {this.props.current == 'home' ?
                                    <li><Link className="btn-outline btn-purple" to="/contact">Contact</Link></li>
                                    : <li><Link className={this.props.current == "contact" ? "active btn-outline" : 'btn-outline'} to="/contact">Contact</Link></li>}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={this.state.fakeHeader}></div>
            </>
        );
    }
}

export default Header;