import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import {
  app,
  trace,
} from './lib'

class App extends React.Component {

  public state = {
    cats: []
  }

  public componentDidMount() {
    app('cats').then((cats) => {
      trace('didMount', cats)
      this.setState({cats})
    })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { this.state.cats.map((x: string, i: number) => <img key={i} src={x}/>) }
      </div>
    );
  }
}

export default App;
