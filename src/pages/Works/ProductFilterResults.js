import React from 'react';
import Product from './Product';

class ProductFilterResults extends React.Component {

  render() {
    var results = [];
    let uniqueSet
    let backToArray

    this.props.products.map((product, key) => {
     
        if (this.props.series === 0 || this.props.series === 'All') {
          results.push(<Product key={key} product={product} />);
        }
        else{ 
          for (let item of product.series ) {
          if (item === this.props.series) {
          
          results.push(<Product key={key} product={product} />);
        }  
      }     
        
      }

    });
    uniqueSet = new Set(results);
    backToArray = [...uniqueSet];
        
    return (
      <div className="row">
        
          {backToArray}
        
      </div>
    )
  }
}



export default ProductFilterResults;