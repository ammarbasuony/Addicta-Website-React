import React from 'react'
import Fade from 'react-reveal/Fade';

const Social = (props) =>
    (
        <Fade bottom cascade>
            <div className="section">
                <div className="social">
                    <div className="activity">
                        <div className="container">
                            <div className="row">
                                <div className="text col-md-6">
                                    <h2>{props.title}</h2>
                                    <p className="mb-0">{props.text}</p>
                                </div>
                                <div className="col-md-6">
                                    <img src={require(`../../../../assets/img/CaseStudy/foodpage/${props.image}`)} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-6" style={{opacity: '0'}}>
                                <h2>Some Numbers!</h2>
                                <ul>
                                    <li>Total Reach : <span>1.2M+</span></li>
                                    <li>App Downloads : <span>80K+</span></li>
                                    <li>Facebook page likes : <span>35K+</span></li>
                                    <li>Post Engagement : <span>120K+</span></li>
                                </ul>

                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-12 img-container">
                                {props.imgs.map((img, index) =>
                                    <img key={index} src={require(`../../../../assets/img/CaseStudy/foodpage/${img}`)} alt={img} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
        </Fade>
    )
export default Social;

