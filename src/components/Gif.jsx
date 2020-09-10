import React from 'react'

class Gif extends React.Component{
  render(){
    const src = `https://media0.giphy.com/media/${this.props.id}/200.gif`;
    return(
      <img src={src} className="gif" alt="gif" />
    );
  }
}


export default Gif
