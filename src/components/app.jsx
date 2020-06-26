import React, { Component } from 'react';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="left-screen">
          <FlatList />
        </div>
        <div className="right-screen"></div>
      </div>
    );
  }
}

export default App;
