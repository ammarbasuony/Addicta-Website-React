import React, { Component } from 'react';
import Illustration from '../../components/Illustration/Illustration-test';
import Fade from 'react-reveal/Fade';

class Animation extends Component {

    state = {
        reference: 0,
        currentScrollHeight: 0,
        show: '',
        erase: false,
        currentForAnimation: -1,
        currentWord: 0,
        typeEffect: {
            i: 0,
            txt: ['Addictive', 'Valuable', 'Professional', 'Scalable'],
            speed: 50,
            eraseDelay: 600,
            colors: ['#6E18E9', '#27DDA1', '#3483E5', '#FF7171'],
            current: ''
        }
    }

    typeWriter = () => {
        var j = this.state.typeEffect.i;
        var c_word = this.state.currentWord;

        // it changes with respect to 'c_word' var
        var word = this.state.typeEffect.txt[c_word];
        var currentt = this.state.typeEffect.current;

        // Typing the text
        if (j < word.length && !this.state.erase) {
            this.setState({
                typeEffect: {
                    current: currentt += word.charAt(j),
                    txt: this.state.typeEffect.txt,
                    i: ++j,
                    speed: this.state.typeEffect.speed,
                    eraseDelay: this.state.typeEffect.eraseDelay,
                    colors: this.state.typeEffect.colors
                }
            });

            // Increment 'c_word' by one to go to the next word
            if (j === 1) {
                if (this.state.typeEffect.txt.length - 1 > this.state.currentForAnimation) {
                    this.setState({
                        currentForAnimation: this.state.currentForAnimation + 1,
                    });
                } else if (this.state.typeEffect.txt.length - 1 === this.state.currentForAnimation) {
                    this.setState({
                        currentForAnimation: 0,
                    });
                }
            }

            setTimeout(this.typeWriter, this.state.typeEffect.speed);

            // Changing the indicator to let the function erase the text and perform a delay
        } else if (j === word.length) {
            setTimeout(() => {
                this.setState({
                    erase: true
                });
            }, this.state.typeEffect.eraseDelay / 1);
        }

        if (j > -1 && this.state.erase) {
            this.setState({
                typeEffect: {
                    current: word.substring(0, j),
                    txt: this.state.typeEffect.txt,
                    i: --j,
                    speed: this.state.typeEffect.speed,
                    eraseDelay: this.state.typeEffect.eraseDelay,
                    colors: this.state.typeEffect.colors
                }
            });
            setTimeout(this.typeWriter, this.state.typeEffect.speed);

            // Increment 'c_word' by one to go to the next word
            if (j === -1) {
                if (this.state.typeEffect.txt.length - 1 > c_word) {
                    this.setState({
                        currentWord: c_word + 1,
                    });
                } else if (this.state.typeEffect.txt.length - 1 === c_word) {
                    this.setState({
                        currentWord: 0,
                    });
                }
            }

            // Reset the indicator to type not to erase
        } else if (j === -1) {
            this.setState({
                erase: false,
            });

        }

    }

    scrollnewsection = () => {
        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: 'smooth'
        });
    }
    componentDidMount() {
        // get the scroll value
        this.setState({
            reference: (document.documentElement.clientHeight / 3)
        });

        window.addEventListener('scroll', (e) => {
            this.setState({
                currentScrollHeight: window.scrollY
            });
        });

        setTimeout(() => {
            this.setState({
                show: 'show'
            });

            setTimeout(() => {
                setInterval(() => {
                    this.typeWriter();
                }, this.state.typeEffect.eraseDelay * 1.5);
            }, 1200);
        }, 500);
    }

    render() {
        let colors = {
            color: this.state.typeEffect.colors[this.state.currentWord]
        }

        return (
            <div className="home-header">
                {this.props.children}
                <div className="container">
                    <h2>Let’s Design <span style={colors}>{this.state.typeEffect.current}</span>
                        <br /> Digital Product</h2>
                    <h3>We do Branding, Mobile apps, Websites & More+ </h3>
                    <i className="down-arrow" onClick={this.scrollnewsection} />
                </div>

                <div className="illustration">
                    <Illustration currentWord={this.state.currentForAnimation} show={this.state.show} />
                </div>
            </div>
        );
    }
}

export default Animation;