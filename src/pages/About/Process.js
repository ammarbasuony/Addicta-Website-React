import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ReactDOM from 'react-dom';

class Process extends Component {
    state = {
        progressHeight: 0,
        winScroll: 0,
        offsets: {}
    }

    componentDidMount() {
        var _this = this;

        // Detect Each Process 
        var entry = this.refs.prog.childNodes;

        this.setState({
            offsets: {
                Discuss: entry[0].offsetTop - (window.innerHeight / 2),
                Discover: entry[1].offsetTop - (window.innerHeight / 2),
                Define: entry[2].offsetTop - (window.innerHeight / 2),
                Design: entry[3].offsetTop - (window.innerHeight / 2),
                Develop: entry[4].offsetTop - (window.innerHeight / 2),
                Deploy: entry[5].offsetTop - (window.innerHeight / 2)
            }
        });

        window.onscroll = () => {
            let progressionElement = ReactDOM.findDOMNode(this.refs.prog);
            if (progressionElement) {
                var winScroll = (document.documentElement.scrollTop || document.body.scrollTop) - progressionElement.offsetTop;
                var height = progressionElement.scrollHeight;
                var scrolled = winScroll > 0 && winScroll <= progressionElement.offsetTop ? (winScroll / height) * 100 : '';
                _this.setState({
                    progressHeight: scrolled < 2 ? (scrolled) + "%" : (scrolled + 10) + "%",
                    winScroll: winScroll
                });
            }
        };
    }
    render() {
        var currentScroll = this.state.winScroll;
        var offsets = this.state.offsets;

        // var style = {
        //     height: this.state.progressHeight
        // }
        return (
            <div className="process-section" id="process">
                <div className="container">
                    <h1>Process</h1>
                    <p>Agile, Design sprint and Design thinking are all included in our 6D’s Process…</p>

                    <div className="progression" ref="prog">
                        <Fade bottom cascade>
                            <div className={"entry " + (currentScroll > offsets.Discuss ? 'reached' : '')}>
                                <img src={require(`../../assets/img/icons/Discuss-icon.png`)} alt="Discuss" />
                                <section>
                                    <h3>Discuss</h3>
                                    <p>Understanding the business nature and needs and how he can solve his/her problem digitally. <br /><span>People involved:</span> Product Manager and Business Analyst.</p>
                                </section>
                            </div>
                            <div className={"entry " + (currentScroll > offsets.Discover ? 'reached' : '')}>
                                <div className="timeline">
                                    <div className="progressBar"></div>
                                </div>
                                <img src={require(`../../assets/img/icons/Discover_icon.png`)} alt="Discover" />
                                <div className="timeline">
                                    <div className="progressBar"></div>
                                </div>
                                <section>
                                    <h3>Discover</h3>
                                    <p>Based on the inputs, we study the business field, explore the competitors, then we take insights from some potential users. <br /><span>People involved:</span> Product Manager and UX Designer.</p>
                                </section>
                            </div>
                            <div className={"entry " + (currentScroll > offsets.Define ? 'reached' : '')}>
                                <div className="timeline">
                                    <div className="progressBar"></div>
                                </div>
                                <img src={require(`../../assets/img/icons/User_icon.png`)} alt="Define" />
                                <section>
                                    <h3>Define</h3>
                                    <p>At this stage we decide the needed business scope, then we start to define the information architecture, user stories and user flows. <br /><span>People involved:</span> Product Manager and UX Designer.</p>
                                </section>
                            </div>
                            <div className={"entry " + (currentScroll > offsets.Design ? 'reached' : '')}>
                                <div className="timeline">
                                    <div className="progressBar"></div>
                                </div>
                                <img src={require(`../../assets/img/icons/Branding_icon.png`)} alt="Design" />
                                <section>
                                    <h3>Design</h3>
                                    <p>Here comes the business owner’s part to visualize / imagine high fidelity interactive wireframes, then together we design colored user interface version at this point we provide the business owner with a prototype for testing. <br /><span>People involved: </span> UX Designer and UI Designer.</p>
                                </section>
                            </div>
                            <div className={"entry " + (currentScroll > offsets.Develop ? 'reached' : '')}>
                                <div className="timeline">
                                    <div className="progressBar"></div>
                                </div>
                                <img src={require(`../../assets/img/icons/Dev_icon.png`)} alt="Develop" />
                                <section>
                                    <h3>Develop</h3>
                                    <p>The developing phase actually starts with the discovery phase, at this point the developer should know the needed technologies, setup the environment and start coding. <br /><span>People involved: </span> UX Designer, UI Designer and Developers.</p>
                                </section>
                            </div>
                            <div className={"entry " + (currentScroll > offsets.Deploy ? 'reached' : '')}>
                                <div className="timeline">
                                    <div className="progressBar"></div>
                                </div>
                                <img src={require(`../../assets/img/icons/Deploy_icon.png`)} alt="Deploy" />
                                <section>
                                    <h3>Deploy</h3>
                                    <p>After launching the product we study the users’ behavior and data to enhance the product’s usability and navigation along with fixing any bugs that might pop up. <br /><span>People involved:</span> Product Manager , UX Designer and Developers.</p>
                                </section>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}

export default Process;