import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
 
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <Home />
        </div>
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="sect-banner">
          <ul className="kf-slider">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="v-center">
            <div className="col s4 fade-in one">
              <h1><b>Drift</b></h1>
              <h3>Find your next adventure</h3>
            </div>
            <Link to="/travel-profile" className="waves-effect waves-light btn">Get Started </Link>
          </div>
        </section>
      </div>
    )
  }
}

class TravelProfile extends React.Component {
  componentDidMount() {
    AmCharts.makeChart( "mapdiv", {
      /**
       * this tells amCharts it's a map
       */
      "type": "map",

      /**
       * create data provider object
       * map property is usually the same as the name of the map file.
       * getAreasFromMap indicates that amMap should read all the areas available
       * in the map data and treat them as they are included in your data provider.
       * in case you don't set it to true, all the areas except listed in data
       * provider will be treated as unlisted.
       */
      "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true
      },

      /**
       * create areas settings
       * autoZoom set to true means that the map will zoom-in when clicked on the area
       * selectedColor indicates color of the clicked area.
       */
      "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000"
      },

      /**
       * let's say we want a small map to be displayed, so let's create it
       */
      "smallMap": {}
    } );
  }
  render() {
    var styles = {
      width: '600px',
      height: '400px'
    }
    return (
      <div>
        <div id="mapdiv" style={styles}></div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/travel-profile" component={TravelProfile}/>
  </Router>,
  document.getElementById('app')
);


