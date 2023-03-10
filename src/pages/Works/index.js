import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Talk from '../../components/Talk/Talk';
import ProductFilter from './ProductFilter';

class Works extends Component {

    componentDidMount() {
        document.title = "Addicta – Works";
    }

    render() {

        return (
            <>
                <div className="works">
                    <div className="inner-header">
                        <Header current="work" />
                    </div>
                    <div className="inner works pb-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <h1>We choose challenging ideas</h1>
                                    <span>This is not all of our work. However, we respect our clients' demand to keep them discreet as they are under NDA.</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ProductFilter />
                                </div>
                            </div>
                        </div>

                        <Talk />
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Works;