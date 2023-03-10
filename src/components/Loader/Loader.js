import React, { Component } from 'react';
import './Loader.scss';
import icon from '../../assets/img/loader.gif';

class Loader extends Component {
    render() {
        return (
            <div className={`loader ${this.props.fadeOut}`}>
                <img src={icon} alt="loader" />
            </div>
        );
    }
}

export default Loader;