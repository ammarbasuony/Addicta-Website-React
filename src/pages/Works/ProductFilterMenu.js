import React from 'react';
import Li from './Li';

class ProductFilterMenu extends React.Component {
  constructor() {
    super();
    this.state={
      style:"active",
      animate: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    this.props.onFormInput (
      event
      
    );
    this.setState({animate: !this.state.animate})
  }
  //handleChange() {
    //this.props.onFormInput (
     // this.refs['seriesInput'].value
   // );
 // }
  render() {  
    const {animate} = this.state
    return (
      <>
      <ul className="filterUl">
        <Li
        text="All"
        onclick={(event)=> {this.handleClick(event.target.innerHTML)}}
        styles={animate?'active': ''} />
        <Li
        text="Case studies"
        onclick={(event)=> this.handleClick(event.target.innerHTML)}
        styles={animate?'active': ''} />
        <Li
        text="Mobile"
        onclick={(event)=> this.handleClick(event.target.innerHTML)}
        styles={animate?'active': ''} />
        <Li
        text="Website"
        onclick={(event)=> this.handleClick(event.target.innerHTML)}
        styles={animate?'active': ''} />        
        <Li
        text="Branding"
        onclick={(event)=> this.handleClick(event.target.innerHTML)}
        styles={animate?'active': ''} /> 
        <Li
        text="Animation"
        onclick={(event)=> this.handleClick(event.target.innerHTML)}
        styles={animate?'active': ''} /> 
      </ul>

      </>
    );
  }
}


export default ProductFilterMenu;