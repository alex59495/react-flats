import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import Marker from "./marker";
import flats from "../../data/flats";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <div className="left-screen">
          <FlatList
            flats={this.state.flats}
            selectedFlat={this.state.selectedFlat}
            selectFlat={this.selectFlat}
          />
        </div>
        <div className="right-screen">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12} bootstrapURLKeys={{ key: "AIzaSyBaq8u-MzrVoqqoPr4yKBz_cpSAplfOkQg" }}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
