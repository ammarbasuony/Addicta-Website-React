import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

class Talk extends Component {
    render () {
        return (
            <div className="talk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="mb-4">Do you have a challenging Idea?</p>
                            <h2>Let’s design your successful product!</h2>
                            <Link to="/contact" className="btn btn-main">Let’s Talk</Link>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export default Talk;