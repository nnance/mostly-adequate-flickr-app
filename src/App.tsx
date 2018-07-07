import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import {
  getJSON, srcs,
} from './lib'

class App extends React.Component {

  public state = {
    images: []
  }

  public componentDidMount() {
    getJSON('puppies').then(
      (data) => this.setState({images: srcs(data)})
    );
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { this.state.images.map((x: string, i: number) => <img key={i} src={x}/>) }
      </div>
    );
  }
}

export default App;
