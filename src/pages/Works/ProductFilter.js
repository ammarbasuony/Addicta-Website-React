import React from 'react';
import ProductFilterResults from './ProductFilterResults';
import data from '../../all-data.json';

class ProductFilter extends React.Component {
    constructor() {
      super();
      
      this.handleFormInput = this.handleFormInput.bind(this);
      
      this.state = {
        series: 0,
        abv: 0
      }
    }
    
    handleFormInput(series, abv) {
      this.setState({
        series: series,
        abv: abv
      })
    }
    
    render() {
     // const products = [
        //{name: 'VetCode app',  series:['Mobile', 'Website', 'Branding', 'Animation'],image:VetCode},
        //{name: 'El Hrameen app',  series:['Mobile'],image:haramen},
      //  {name: "New Frontiers website",  series:['Website', 'Branding'],image:screenshot},
       // {name: "ACCM website",  series:['Website'],image:work7},
       // {name: 'Food Page app',  series:['Mobile', 'Branding'],image:FoodPage},
       // {name: 'Tasky app',  series:['Mobile', 'Branding'],image:tasky}
     // ];
      
      return (
        <div className="filter">
         {/*
        <ProductFilterMenu
            series={this.state.series}
            onFormInput={this.handleFormInput}
          />         
        */} 

          <ProductFilterResults
            products={data.works_case_studies}
            series={this.state.series}
          />
        </div>
      )
    }
  }

export default ProductFilter;