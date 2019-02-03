import React, { Component } from 'react';

class meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  fetchSarcastic(input){
    console.log('calling API');
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=ipNeWFqzOL4HGWdgUKRGkE4JxmUxso3P&tag=${input}&fmt=json&limit=1&gif_id=`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({ url : data.data.images.downsized_large.url })
    });
  }

  getGif(){
    if (this.props.is_sarcasm === 0){
      console.log('is_sarcasm is 0');
      this.fetchSarcastic('huh')
    } else {
      console.log('is_sarcasm is !0');
      this.fetchSarcastic('LOL')
    }
    console.log(this.props.is_sarcasm)
  }

  render(){
    return (
        <div>
          {/* {this.getGif()} */}
          {this.props.is_sarcasm ===0 || this.props.is_sarcasm ===1 ? this.getGif() : console.log(this.props.is_sarcasm)}
          <img src={this.state.url ? this.state.url : console.log(this.state.url)} alt=""/>
        </div>
    )
  }


}

export default meme;