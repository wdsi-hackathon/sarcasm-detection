import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.state = {
     result:""
    }
  }
  
//   handleChange = ({ currentTarget: input }) => {
//     const data = { ...this.state.data };
//     data[input.name] = input.value;
//     this.setState({ data });
// };

handleChange(event){
  const input = event.target.value
  console.log(this.state.result)
  this.setState({result: input})
}

handleSend(){
  this.props.handleChange(this.state.result)
  // console.log(this.state.result)
}

  render() {
    return (
      <div className="contaienr">
      
            <div class="search"></div>

      <input class="search" type="text" placeholder="Search..." name="value" onChange={this.handleChange.bind(this)}/>
      
    

      <button className="btn" onClick={() => this.handleSend()}>send</button>
      </div>
    );
  }
}

export default Input;
