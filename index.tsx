import React, { Component } from 'react';
import { render } from 'react-dom';
import Todo from './components/Todo/Todo';

import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>App </h1>
        <Todo></Todo>
      </React.Fragment>
    );
  }
}
render(<App />, document.getElementById('root'));
