import React, {Component} from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <button>{this.props.text}</button>
    ) 
  }  
}
 
export default Button;
