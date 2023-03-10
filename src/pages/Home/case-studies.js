import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class CaseStudies extends Component {
    render() {
        let caseStudies = this.props.caseStudies;

        let case_studies = caseStudies.map(caseStudy =>
            <div className="case" key={caseStudy.id}>
                <div className="left-gradient"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={"col-lg-6 col-md-5 px-md-0 px-5 " + (caseStudy.id % 2 === 0 ? 'order-md-last' : '') + (caseStudy.type === 'mobile-app' ? ' offset-md-1' : '')}>
                            <Fade bottom cascade>
                                <div className="content">
                                    <h1>{caseStudy.project_name}</h1>
                                    <h3>{caseStudy.project_short_description}</h3>
                                    <p>{caseStudy.project_full_description}</p>
                                    <Link to={"/work/" + caseStudy.slug}>View Project <i className="fas fa-long-arrow-alt-right" /></Link>
                                </div>
                            </Fade>
                        </div>
                        <Fade bottom cascade>
                            {caseStudy.type === 'mobile-app' ? (
                                <div className={"col-lg-3 offset-lg-1 col-md-6 " + (caseStudy.id % 2 === 0 ? 'order-md-first' : '')}>
                                    <div className={"mob-mockup" + (caseStudy.id % 2 === 0 ? ' goleft' : '')}>
                                        <video autoPlay={true} muted loop playsInline id="aspiration-video" className="portfolio-video">
                                            {caseStudy.project_ui_video ? (
                                                <source src={`${caseStudy.project_ui_video}`} type="video/mp4" />
                                            ) : ''}
                                        </video>
                                    </div>
                                </div>
                            ) : (
                                    <div className={"col-lg-6 px-md-0 col-md-6 " + (caseStudy.id % 2 === 0 ? 'order-md-first' : '')}>
                                        <div className={"laptop-mockup" + (caseStudy.id % 2 === 0 ? ' goleft' : '')}>
                                            <video autoPlay={true} muted loop playsInline id="aspiration-video" className="portfolio-video">
                                                {caseStudy.project_ui_video ? (
                                                    <source src={`${caseStudy.project_ui_video}`} type="video/mp4" />
                                                ) : ''}
                                            </video>
                                        </div>
                                    </div>
                                )}
                        </Fade>
                    </div>
                </div>
            </div>
        );

        return (

            <div className="case-studies ">
                {case_studies}
            </div>

        );
    }
}

export default CaseStudies;