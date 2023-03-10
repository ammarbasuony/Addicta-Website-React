import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Join extends Component {
    render() {
        return (
            <div className="join-team">
                <Fade bottom cascade>
                    <div className="container">
                        <h1>Join the Team</h1>
                        <p>We are always looking for talented Designers and Developers, no need to be +100 years of experience, but we need a skilled clear minded people :)</p>

                        <section>
                            <a href="mailto:hr@addicta.co" className="btn btn-main">JOIN US</a>
                            <a href="http://www.addicta.co/careers" target="_blank" rel="noopener noreferrer" className="btn-outline btn-purple no-frame">Job Opportunities</a>
                        </section>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Join;