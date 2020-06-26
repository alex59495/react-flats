import React, { Component } from 'react';
import FlatList from './flat_list';
import SimpleMap from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      lng: "",
    };
  }

  FillMap = (lat, lng) => {
    this.setState({
      lat,
      lng,
    });
  }

  render() {
    return (
      <div>
        <div className="left-screen">
          <FlatList FillMap={this.FillMap} />
        </div>
        <div className="right-screen">
          <SimpleMap lat={this.state.lat} lng={this.state.lng} />
        </div>
      </div>
    );
  }
}

export default App;
