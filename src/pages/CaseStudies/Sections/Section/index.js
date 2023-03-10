import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

class Section extends Component {
    render() {
        return (
            <Fade bottom cascade>
                <div className={this.props.ClassSection}>
                    <div className={"part " + this.props.Classmain}>
                        <div className="container">
                            <div className="row">
                                <div className={this.props.Classlayout}>
                                    <div className={this.props.ClassOptions}>
                                        <h2 className={this.props.Classtitle}>{this.props.title}</h2>
                                        <h4 className={this.props.ClassSubtitle}>{this.props.subtitle}</h4>
                                        <p className={this.props.Classtext}>{this.props.text}</p>
                                    </div>
                                </div>
                                <div className={this.props.ClassimageContainer}>
                                    {this.props.active ?
                                        <img className={this.props.Classimage} src={require(`../../../../assets/img/${this.props.image}`)} alt="" />
                                        : ''}

                                    {this.props.imgs ? this.props.imgs.map((img, index) =>
                                        <Fade bottom>
                                            <div key={index} className={this.props.Classimage}>
                                                {img.img ? <img src={require(`../../../../assets/img/CaseStudy/${img.img}`)} alt="" /> : ''}
                                                <span>{img.caption}</span>
                                            </div>
                                        </Fade>
                                    ) : ""}
                                </div>
                                {this.props.video !== '' ?
                                    this.props.video.map((vid, index) =>
                                        <div className={this.props.video !== '' ? this.props.ClassVideo : 'none'}>
                                            <iframe key={index} src={vid} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Video" />
                                        </div>
                                    ) : ''}
                            </div>
                            {this.props.children}
                        </div>


                    </div>
                </div>
                {!this.props.last ? <div className="hr"></div> : ''}
            </Fade>
        )
    }
}


Section.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
    active: PropTypes.bool,
    Classmain: PropTypes.string,
    Classtitle: PropTypes.string,
    ClassSubtitle: PropTypes.string,
    Classtext: PropTypes.string,
    ClassimageContainer: PropTypes.string,
    Classimage: PropTypes.string,
    Classlayout: PropTypes.string,
    ClassOptions: PropTypes.string,
    ClassVideo: PropTypes.string,
    ClassSection: PropTypes.string,
    video: PropTypes.instanceOf(Element),



};
export default Section;

