import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Services extends Component {
    render() {

        let services = this.props.services.map(service => (
            <div key={service.service_id} className="col-md-4">
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
            <div className="services">
                <div className="container">
                    <h2>Services</h2>
                    <p>We help business to scale and transform <br /> through our services…</p>

                    <div className="services-items">
                        <div className="row">
                            <Fade bottom cascade>
                                {services}
                                <div className="mx-auto">
                                    <a href="/about#services" className="btn btn-main">LEARN MORE</a>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;