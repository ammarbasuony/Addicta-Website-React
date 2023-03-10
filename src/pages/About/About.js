import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../../all-data.json';

// Global Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Talk from '../../components/Talk/Talk';

// Components
import Services from './Services';
import Process from './Process';
import Team from './Team';
import Join from './Join';

class About extends Component {

    componentDidMount () {
        document.title = "Addicta – About";
    }

    render() {
        return (
            <div className="about-page">
                <div className="inner-header">
                    <Header current="about" />
                </div>
                <div className="inner about">
                    <Fade bottom cascade>
                        <div className="about-section">
                            <div className="container">
                                <h1>A Digital Product Design Company</h1>
                                <p><span>Addicta.co</span> is a digital product design company that specializes in UX / UI / Branding design and development for mobile apps, web portals and commercial websites.</p>
                            </div>
                        </div>
                        <div className="about-section">
                            <div className="container">
                                <h1>Move to Digital World!</h1>
                                <p>We believe that the digital world has become the dominant of entrepreneurs’ and startups’ community, so we always have to be ready and prepared through clear strategies and high performance packed with our values.</p>
                            </div>
                        </div>
                    </Fade>
                    <div className="hr"></div>

                    {/* Services */}
                    <Services services={data.full_services} />
                    <div className="hr"></div>

                    {/* Process */}
                    <Process />
                    <div className="hr"></div>

                    {/* Family PICs */}
                    <div className="family-pics">
                        <div className="container">
                            <h1>Add+ Family</h1>
                            <p>We are a Family | We have Fun | We love what we do.</p>

                            <div className="pictures">
                                <Fade>
                                    <section>
                                        <img src={require(`../../assets/img/images/addicta-family/2.png`)} alt="Family" />
                                    </section>
                                    {/* <section>
                                        <img src={require(`../../assets/img/images/addicta-family/1.png`)} alt="Family" />
                                    </section>
                                    <section>
                                        <img src={require(`../../assets/img/images/addicta-family/3.png`)} alt="Family" />
                                    </section>
                                    <section>
                                        <img src={require(`../../assets/img/images/addicta-family/4.png`)} alt="Family" />
                                    </section> */}
                                </Fade>
                            </div>
                        </div>
                    </div>

                    {/* The Team */}
                    <Team theTeam={data.team} />
                    <div className="hr"></div>

                    {/* Join The Team */}
                    <Join />

                </div>
                    {/* Footer */}
                    <Talk />
                    <Footer />
            </div>
        );
    }
}

export default About;