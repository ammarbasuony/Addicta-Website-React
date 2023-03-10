import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Services extends Component {
    render() {

        let services = this.props.services.map(service => (
            <div key={service.service_id} className={"col-md-5 " + (service.service_id % 2 === 0 ? "offset-md-1" : '')}>
                <div className="item">
                    <img src={require(`../../assets/img/icons/${service.icon}`)} alt={service.title} />
                    <section>
                        <h3>{service.title}</h3>
                        <span>{service.description}</span>
                    </section>
                </div>
            </div>
        ));

        return (
            <div className="services-section" id="services">
                <div className="container">
                    <h1>Services</h1>
                    <p>We help your business to scale and transform through our services</p>

                    <div className="services-items">
                        <div className="row">
                            <Fade bottom cascade>
                                {services}
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;