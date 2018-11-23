import React, { Component } from 'react';
import unsplash from './api/unsplash';
import ImageList from './comps/ImageList';
import './App.css';
import SearchBar from './comps/SearchBar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      images: []
    }
  }
  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }
  onSearch = async () => {
    const response = await unsplash.get('/search/photos', {
      params: { query: this.state.term },

    });
    this.setState({images: response.data.results});
  }
  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSearch={this.onSearch} term={this.state.term} onInputChange={this.onInputChange}/>
        <ImageList result={this.state.images} />
      </div>
    );
  }
}

export default App;
