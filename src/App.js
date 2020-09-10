import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import Gif from'./components/Gif';
import GifList from './components/Gif_list';

class App extends React.Component {

  state = {
    gifs: [],
    selectedGifId:"xT9IgDEI1iZyb2wqo8"
  }

  render(){

    const gifs = [
      {id: 'xT9IgDEI1iZyb2wqo8'},
      {id: 'xT9IgDEI1iZyb2wqo8'},
      {id: 'xT9IgDEI1iZyb2wqo8'},
      {id: 'xT9IgDEI1iZyb2wqo8'}
    ]

    return (
    <div className="App">

    <div className="left-scene">
      <SearchBar />
      <div className="selected-gif">
        <Gif id={this.state.selectedGifId}/>
      </div>
    </div>

    <div className="right-scene">
      <GifList gifs={this.state.gifs}/>
      </div>
    </div>
  );
  }
}

export default App;
