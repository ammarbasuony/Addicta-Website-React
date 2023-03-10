import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class FooterTwo extends Component {
    render () {
        return (
            <>
                <div className="footer-two">
                    <div className="container">
                        <Fade bottom cascade>
                            <h1>Are you interested to collaborate?!</h1>
                            <a href="/contact" className="btn btn-main">Let’s Talk</a>

                            <nav>
                                <ul>
                                    <li><Link to="/face" target="_blank"><i className="fab fa-facebook-square"></i></Link></li>
                                    <li><Link to="/twitter" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="/linked" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                                    {/* <li><Link to="/dribbble"><i className="fab fa-dribbble"></i></Link></li> */}
                                    <li><Link to="/behance"><i className="fab fa-behance"></i></Link></li>
                                </ul>
                            </nav>
                        </Fade>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterTwo;