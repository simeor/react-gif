import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import Gif from'./components/Gif';
import GifList from './components/Gif_list';
import giphy from 'giphy-api';

class App extends React.Component {

  state = {
    gifs: [],
    selectedGifId:"xT9IgDEI1iZyb2wqo8"
  }

  // call the API
  search = (query) =>{
    giphy(process.env.API_URL).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
         this.setState({gifs: res.data})
        });
  }


  render(){

    return (

    <div className="App">

    <div className="left-scene">
      <SearchBar search={this.search}/>
      <div className="selected-gif">
        <Gif id={this.state.selectedGifId} />
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
