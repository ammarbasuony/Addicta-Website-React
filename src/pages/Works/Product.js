import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {

  
  render () {
    return (
      <>
      <div className="col-md-6">
        <div className="products">
          <div className="product-image">
            <a href={`/work/${this.props.product.slug}`} className="overlay">
              View project
            </a>
            
              <img src={require(`../../assets/img/work/${this.props.product.image}`)} alt="" />
          </div>
          <h2 className="mb-0">{this.props.product.name}</h2>
          <ul>
            {this.props.product.series.map((item, index)=>
              <li key={index}>{item}</li>
            )}
          </ul>
        </div>

      </div>
</>
    )
  }
}     


export default Product;