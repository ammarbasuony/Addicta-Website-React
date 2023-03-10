import React, { Component } from 'react';
import data from '../../all-data.json';

// Global Components
import Header from '../../components/Header/Header';
import FooterTwo from '../../components/Footer-2/Footer-2';

// Home Components
import Animation from './Animation';
import CaseStudies from './case-studies';
import Testimonial from '../../pages/Home/testimonial';
import Services from '../../pages/Home/services';
import Process from '../../pages/Home/process';

class Home extends Component {
    state = {
        reference: 0,
        currentScrollHeight: 0,
        currentColor: '',
    }

    componentDidMount() {

        document.title = "Addicta – Digital Product Design Company";

        // get the scroll value
        var casee = document.getElementsByClassName('case')[0].clientHeight;
        if (window.innerWidth > 768 && casee) {
            this.setState({
                reference: (document.documentElement.clientHeight / 3)
            });
        } else {
            this.setState({
                reference: ((casee - 200) / 3)
            });
        }

        
        // Animation for case studies
        
        window.addEventListener('scroll', this.changeColor.bind(this));
        window.addEventListener("touchmove", this.changeColor.bind(this));
    }
    
    changeColor(e) {
        this.setState({
            currentScrollHeight: document.documentElement.scrollTop || document.body.scrollTop
        });
        

        // For Case Studies
        let f1 = 1;
        let f2 = 3.5;
        for (let index = 0; index <= data.case_studies.length; index++) {

            // First Case            
            if (this.state.currentScrollHeight > this.state.reference * f1) {
                if (this.state.currentScrollHeight < this.state.reference * f2) {
                    if (index <= data.case_studies.length - 1) {
                        this.setState({
                            currentColor: `scrolling ${data.case_studies[index].class_name}` //show-gradient
                        });
                    }
                } /*else {
                            if (index <= data.case_studies.length - 1) {
                                this.setState({
                                    currentColor: `scrolling ${data.case_studies[index].class_name}`
                                });
                            }
                        }*/

                if (index > data.case_studies.length - 1) {
                    this.setState({
                        currentColor: ''
                    });
                }
            } else {
                if (index === 0) {
                    this.setState({
                        currentColor: ''
                    });
                }
            }

            f1 = f2 + 0.7;
            f2 = f1 + 2.7;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.currentColor !== nextState.currentColor) {
            return true;
        }
        return false;
    }

    render() {
        let currentColor = this.state.currentColor;

        return (
            <div className={"home " + currentColor}>
                {/* First Section: Typing text + Animated illustration */}
                <Animation>
                    <Header current="home" currentClass={currentColor} />
                </Animation>

                {/* Second Section: Case Studies */}
                <CaseStudies caseStudies={data.case_studies} />

                {/* Third Section: Services */}
                <Services services={data.services} />

                {/* Forth Section: Process */}
                <Process />

                {/* Fifth Section: Testimonial */}
                <Testimonial testimonial={data.testimonial} />

                {/* Footer */}
                <FooterTwo />
            </div>
        );
    }
}

export default Home;