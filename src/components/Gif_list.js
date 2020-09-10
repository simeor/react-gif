import React from 'react';
import Gif from './Gif';

class GifList extends React.Component{

  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} className="gif"/>);
  }

  render(){
    return(
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}


export default GifList
