import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Feature extends Component {
    render() {
        return(
            <>
                        <div className={`row details ${this.props.Classmain}`}>
                        <div className={this.props.ClassimageContainer}>
                        <img src={this.props.active?require(`../../../../assets/img/${this.props.image}`):''} alt="" />
                        </div>
                        <div className={this.props.Classtext}>
                        <div className="text">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.text}</p>
                        </div>
                        </div>
                        </div>
                    
                    </>
        
        )
    }
}


Feature.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
    active: PropTypes.bool,   
    Classmain: PropTypes.string,
    Classtext:PropTypes.string,
    ClassimageContainer:PropTypes.string,
     

  };
export default Feature;

