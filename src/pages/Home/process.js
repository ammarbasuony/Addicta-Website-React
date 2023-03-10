import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Process extends Component {
    render() {

        return (
            <div className="process">
                <div className="container">
                    <h2>Process</h2>
                    <p>Agile, Design sprint, Design thinking blent in our <br /> 6D’s Process…</p>

                    <div className="progression">
                        <Fade cascade>
                            <div className="entry">
                                <img src={require(`../../assets/img/icons/Discuss-icon.png`)} alt="Discuss" />
                                <h3>Discuss</h3>
                            </div>
                            <div className="entry">
                                <img src={require(`../../assets/img/icons/Discover_icon.png`)} alt="Discuss" />
                                <h3>Discover</h3>
                            </div>
                            <div className="entry">
                                <img src={require(`../../assets/img/icons/User_icon.png`)} alt="Discuss" />
                                <h3>Define</h3>
                            </div>
                            <div className="entry">
                                <img src={require(`../../assets/img/icons/Branding_icon.png`)} alt="Discuss" />
                                <h3>Design</h3>
                            </div>
                            <div className="entry">
                                <img src={require(`../../assets/img/icons/Dev_icon.png`)} alt="Discuss" />
                                <h3>Develop</h3>
                            </div>
                            <div className="entry">
                                <img src={require(`../../assets/img/icons/Deploy_icon.png`)} alt="Discuss" />
                                <h3>Deploy</h3>
                            </div>
                        </Fade>
                        <div className="timeline"></div>
                    </div>

                    <a href="/about#process" className="btn btn-main">LEARN MORE</a>
                </div>
            </div>
        );
    }
}

export default Process;