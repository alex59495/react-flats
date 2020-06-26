import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.FillMap(this.props.flat.lat, this.props.flat.lng);
  };

  render() {
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})` }} onClick={this.handleClick}>
        <div className="card-category">
          {this.props.flat.price}
          {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>

      </div>
    );
  }
};

export default Flat;
