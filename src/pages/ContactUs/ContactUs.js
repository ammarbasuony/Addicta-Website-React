import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Form from './Form';
import Map from './Map';

class ContactUs extends Component {

    componentDidMount() {
        document.title = "Addicta – Contact";
    }

    render() {

        return (
            <>
                <div>
                    <div className="inner-header">
                        <Header current="contact" />
                    </div>
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>
                                        Hello There!
                        </h1>
                                    <p>Takes less than a minute to let us know about your project, we will respond within 1 business day.</p>
                                    <Form />
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-details col-md-8 offset-md-4">
                                        <h2>Talk with us via,</h2>
                                        <ul>
                                            <li>Sales: +201099984531</li>
                                            <li>HR: +201063636644</li>
                                            <li><a href="mailto:info@addicta.co?subject=Contact%20Addicta">info@addicta.co</a></li>
                                            <li><a href="mailto:hr@addicta.co?subject=Contact%20Addicta">hr@addicta.co</a></li>
                                        </ul>
                                        <h2>Come to our office,</h2>
                                        <p className="mb-0">4 Narges Villas, infront of Mobil gas station, New Cairo, Cairo, Egypt</p>

                                        <Map />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default ContactUs;