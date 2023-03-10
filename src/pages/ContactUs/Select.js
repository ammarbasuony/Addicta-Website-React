// Dependencies
import React, {Component} from 'react';


// Stateless component / Functional component

  class Select extends Component { 
    render(){

      return(
<>
< div className="selectinput">
<ul className="mb-0">
  <li>
  ya rab tenga7 ya tata7
  <i class="fa fa-times"></i>
  </li>
</ul>
</div>
<select multiple = "multiple" name="worktype" size="4" 
  onChange={this.props.onChange}
  type='text'
  value={this.props.value}
>
  
  {this.props.option.map((opt, key)=>{
    return(
    <option key={key} value={opt} onClick={this.props.optionclick}>{opt}</option>
    )
    
  })}
  
  </select>
</>
      )

    }}
  
;

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.




export default Select;