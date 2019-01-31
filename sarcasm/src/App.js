import React, { Component } from 'react';
import Input from "./components/Input";
import './App.css';
import Chart from './components/chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
     result:"",
     text:""
    }
  }

  fetchtext() {
    const url = `http://18.219.241.177:5000/predict?text=${this.state.result}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          text: data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  
//   handleChange = ({ currentTarget: input }) => {
//     const data = { ...this.state.data };
//     data[input.name] = input.value;
//     this.setState({ data });
// };

handleChange(input){
  this.setState({result: input})
  console.log(input)
}

  render() {
    return (
      <div className="App">
      
      {this.state.result === '' ? 
      <Input 
        handleChange ={this.handleChange.bind(this)}
        /> : <div> <Chart text = {this.state.text}/>



</div> 
    }
        
      </div>
    );
  }
}

export default App;
