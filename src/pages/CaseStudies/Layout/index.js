import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/icons/Addicta_logo.svg';
import LogoWhite from '../../../assets/img/CaseStudy/Addicta_logo.svg';
import LogoWhiteOnly from '../../../assets/img/CaseStudy/white-only.svg';
import LogoOnly from '../../../assets/img/icons/logo-only.svg';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Talk from '../../../components/Talk/Talk';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);

    }

    state = {
        colored: false
    }

    scrollnewsection = () => {
        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: 'smooth'
        });
    }

    handleScroll() {
        let navbar = ReactDOM.findDOMNode(this.refs.navbar);
        let startElement = ReactDOM.findDOMNode(this.refs.sec2);
        let windowsScrollTop = window.pageYOffset;
        if (startElement) {
            if (windowsScrollTop >= startElement.offsetHeight) {
                navbar.classList.add("navbar-fixed-top");
                this.setState({
                    colored: true
                });
            } else {
                navbar.classList.remove("navbar-fixed-top");
                this.setState({
                    colored: false
                });
            }
            // console.log(this.state.colored);
        }
    }
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillMount() {
        window.removeEventListener('scroll', this.handleScroll);
    }



    render() {
        var style = {
            backgroundImage: this.props.banner ? `url(${require(`../../../assets/img/CaseStudy/${this.props.banner}`)})` : ``
        }
        return (
            <div className={this.props.mainClass}>
                <div className="casestudies" >
                    <div className="banner" style={style} ref="sec2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <header className="casestudy-bar" ref="navbar" >
                                        <div className="container">
                                            <nav>
                                                <Link className="home-link" to="/">
                                                    {this.state.colored ? <><img src={Logo} className="for-web" alt="Addicta Logo" />
                                                        <img src={LogoOnly} className="for-mobile" alt="Addicta Logo" /></> : <><img src={LogoWhite} className="for-web" alt="Addicta Logo" />
                                                        <img src={LogoWhiteOnly} className="for-mobile" alt="Addicta Logo" /></>}
                                                </Link>
                                                <ul className="navbar">
                                                    <li><Link to="/work" className="active">Work</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </header>
                                </div>
                            </div>

                            <div className="row banner-text">
                                <div className="col-md-6">
                                    <div>
                                        <h1>{this.props.mainTitle}</h1>
                                        <h3>{this.props.secondTitle}</h3>
                                        <p>{this.props.text}</p>
                                        <ul>
                                            <li><span><img src={this.props.categoryImage.branding ? require(`../../../assets/img/${this.props.categoryImage.branding}`) : ''} alt="" /></span>{this.props.categoryName.branding}</li>
                                            <li><span><img src={this.props.categoryImage.mobile ? require(`../../../assets/img/${this.props.categoryImage.mobile}`) : ''} alt="" /></span>{this.props.categoryName.mobile}</li>
                                            <li><span><img src={this.props.categoryImage.website ? require(`../../../assets/img/${this.props.categoryImage.website}`) : ''} alt="" /></span>{this.props.categoryName.website}</li>
                                            <li><span><img src={this.props.categoryImage.animation ? require(`../../../assets/img/${this.props.categoryImage.animation}`) : ''} alt="" /></span>{this.props.categoryName.animation}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container arrow-cont">
                            <div className="arrow">
                                <i className="down-arrow" onClick={this.scrollnewsection} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="casestudies">
                    {this.props.children}
                    <Fade bottom>
                        <Talk />
                    </Fade>
                    {/* fasel */}

                    <div className="navigation">
                        {this.props.prev !== '' ? (
                            <div className={"img-container main" + (!this.props.next ? " full" : "")}>
                                <a href={this.props.prev.link}>
                                    <img src={this.props.active === true ? require(`../../../assets/img/work/${this.props.prev.img}`) : ''} alt="" />
                                    <div className="prev animated-arrow">
                                        <p>Previous project</p>
                                        <h2>{this.props.prev.name}</h2>
                                    </div>
                                    <span className="the-arrow -left">
                                        <span className="shaft"></span>
                                    </span>
                                </a>
                            </div>
                        ) : ''}
                        {this.props.next !== '' ? (
                            <div className={"img-container main" + (!this.props.prev ? " full" : "")}>
                                <a href={this.props.next.link} className="animated-arrow">
                                    <img src={this.props.active === true ? require(`../../../assets/img/work/${this.props.next.img}`) : ''} alt="" />
                                    <div className="next animated-arrow">
                                        <p>Next project</p>
                                        <h2>{this.props.next.name}</h2>
                                    </div>
                                    <span className="the-arrow -right">
                                        <span className="shaft"></span>
                                    </span>
                                </a>
                            </div>
                        ) : ''}
                    </div>



                    {/* fasel */}

                </div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                © 2019 Addicta.co.
                                    </div>
                            <div className="col">
                                <nav>
                                    <ul className="navbar">
                                        <li><Link to="/face" target="_blank"><i className="fab fa-facebook-square"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link to="/twitter" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/linked" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-dribbble"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-behance"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
Layout.propTypes = {
    mainTitle: PropTypes.string,
    secondTitle: PropTypes.string,
    text: PropTypes.string,
    mainClass: PropTypes.string,
    categoryImage: PropTypes.shape({
        branding: PropTypes.string,
        ux: PropTypes.string,
        mobile: PropTypes.string,
    }),
    categoryName: PropTypes.shape({
        branding: PropTypes.string,
        ux: PropTypes.string,
        mobile: PropTypes.string,
    }),
    next: PropTypes.shape({
        link: PropTypes.string,
        img: PropTypes.string,
        name: PropTypes.string,
    }),
    prev: PropTypes.shape({
        link: PropTypes.string,
        img: PropTypes.string,
        name: PropTypes.string,
    }),
    active: PropTypes.bool
};

export default Layout;