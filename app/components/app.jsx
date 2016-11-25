import React from 'react';
import ReactDOM from 'react-dom';

const ARC_DE_TRIOMPHE_POSITION = {
  lat: 48.873947,
  lng: 2.295038
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};
 
class App extends React.Component {
  render() {
    return (
      <div>
        <Map />
      </div>
    )
  }
}

class Map extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: EIFFEL_TOWER_POSITION,
      zoom: 16
    });
  }
  render() {
    const mapStyle = {
      width: '100%',
      margin: '0 auto',
      height: '100vh',
      border: '1px solid black'
    };
    
    return (
      <div ref="map" style={mapStyle} ref="map">I should be a map!</div>
    );
  }
}
 
ReactDOM.render(<App/>, document.getElementById('app'));