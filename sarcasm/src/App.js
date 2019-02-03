import React, { Component } from 'react';
import Input from "./components/Input";
import './App.css';
import Chart from './components/chart';
//import firebase from 'firebase';
//import Meme from './components/meme';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
      is_sarcasm: null,
      probability_0: 0,
      probability_1: 0,
      urlh: 'https://media.giphy.com/media/EsmlrgWNx5v0Y/giphy.gif',
      urll: 'https://media2.giphy.com/media/pjJTxQv57bCxO/giphy.gif'
    }
  }

  // fetchSarcastic(input){
  //   if (input === 0){
  //     // console.log('is_sarcasm is 0');
  //     this.state.urlh
  //   } else if(input === 1){
  //    this.state.urll
  //   }
  //   // console.log(this.props.is_sarcasm)

  //   // // console.log('calling API');
  //   // fetch(`http://api.giphy.com/v1/gifs/random?api_key=ipNeWFqzOL4HGWdgUKRGkE4JxmUxso3P&tag=${input}&fmt=json&limit=1&gif_id=`)
  //   // .then(response => response.json())
  //   // .then(data => {
  //   //   console.log(data)
  //   //   this.setState({ url : data.data.images.downsized_large.url })
  //   // });

  // }



  fetchData() {
    const url = `http://ec2-54-246-165-204.eu-west-1.compute.amazonaws.com:5000/predict?text=${this.state.result}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        this.setState({
          is_sarcasm: data.is_sarcasm,
          probability_0: data.probability_0,
          probability_1: data.probability_1,
        }, function () { console.log(this.state) })
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

  handleChange(input) {
    this.setState({ result: input })
    console.log(input)
    this.fetchData()
  }

  // handleImg(url){
  // this.setState({url})
  // }

  render() {
    return (
      <div className="App">
        {this.state.result === '' ?
          <Input className="input"
            handleChange={this.handleChange.bind(this)}
          /> :


          <div>         <h1 className="text">Sarcasm VS  not Sarcasm  </h1>
            <div class="row">

              <div class="col1 s6">

                <Chart probability_0={this.state.probability_0} probability_1={this.state.probability_1} />
              </div>
              <div class="col2 s6">
                {/* <div className="img"> */}
                <img src={(this.state.is_sarcasm === 0) ? this.state.urll : this.state.urlh} alt="" />
              </div>
            </div>
          </div>
        }
        {/* {this.state.result ? this.fetchSarcastic(this.state.is_sarcasm): ''} */}
        {/* <img src={(this.state.is_sarcasm === 0 ) ? this.state.urll : this.state.urlh} alt=""/> */}

        {/* {this.state.result ? <Meme is_sarcasm={this.state.is_sarcasm}  /> : ''} */}
        {/* <img src={this.state.url ? this.state.url : ''} alt=""/> */}
      </div>

    );
  }
}

export default App;
