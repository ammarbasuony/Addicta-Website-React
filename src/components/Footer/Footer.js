import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <>
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
                                        {/* <li><Link to="#"><i className="fab fa-instagram"></i></Link></li> */}
                                        <li><Link to="/twitter" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/linked" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                                        {/* <li><Link to="/dribbble"><i className="fab fa-dribbble"></i></Link></li> */}
                                        <li><Link to="/behance"><i className="fab fa-behance"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </footer>

            </>
        );
    }
}

export default Footer;