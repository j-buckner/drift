import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Preloader from './preloader';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
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
      "type": "map",
      "preventDragOut": true,
      "dragMap": true,
      "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true
      },
      "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#000000",
        "color": "#d7dde5",
        "outlineColor": "#FFFFFF",
        "outlineThickness": 1
      },
      "zoomControl": {
        "zoomControlEnabled": true,
        "panControlEnabled": false 
      }
    });
  }
  render() {
    return (
      <div>
        <div id="mapdiv"></div>
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


