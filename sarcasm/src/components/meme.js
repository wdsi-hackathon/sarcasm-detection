import React, { Component } from 'react';

class meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  fetchSarcastic(input){
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=ipNeWFqzOL4HGWdgUKRGkE4JxmUxso3P&tag=${input}&fmt=json&limit=1&gif_id=`)
    .then(response => response.json())
    .then(data => this.setState({ data : data.url }));
  }

  render(){
    return (
        <div>

        </div>
    )
  }


}

export default meme;