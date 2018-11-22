import React, { Component } from 'react';
import './App.css';
import SearchBar from './comps/SearchBar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar term={this.state.term} onInputChange={this.onInputChange}/>
      </div>
    );
  }
}

export default App;
