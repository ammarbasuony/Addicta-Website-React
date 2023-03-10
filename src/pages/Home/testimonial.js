import React, { Component } from 'react';
import Slider from "react-slick";


// ---------------- Custom Arrows
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <i
            className={className + ' fas fa-angle-right'}
            //style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <i
            className={className + ' fas fa-angle-left'}
            //style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

class Testimonial extends Component {
    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        let allTestimonials = this.props.testimonial.map(one => (
            <div key={one.id}>
                <h1>“{one.feedback}“</h1>

                <div className="person">
                    {/* <div className="img">
                        <img src={require(`../../assets/img/images/testimonial/${one.person_img}`)} alt="Ahmed" />
                    </div> */}
                    <h3>{one.person_name}</h3>
                    <span>{one.person_description}</span>
                </div>
            </div>
        ));

        return (
            <div className="testimonial">
                <div className="container">
                    <h2>Clients' Feedback</h2>
                    <Slider {...settings}>
                       {allTestimonials}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Testimonial;