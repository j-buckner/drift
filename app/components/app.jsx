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
  render() {
    let styles = {
      'textAlign': 'center'
    }

    return (
      <div id='profile-container'>
        <div className="col s4">
          <h2 style={styles}> Lets Build Your Travel Profile </h2>
          <h3 style={styles}> Where Have You Been? </h3>
        </div>
        <SidePanel />
        <Map/>
      </div>
    )
  }
}

class SidePanel extends React.Component {
  componentDidMount() {
      $('.button-collapse').sideNav({
        menuWidth: '200px'
      });
  }
  render() {
    let styles = {
      'float': 'right'
    }
    return (<div>
        <ul id="slide-out" className="side-nav fixed">
            <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
              <li>
                <a className="collapsible-header waves-effect">Europe<i className="material-icons" style={styles}>arrow_drop_down</i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#!">First</a></li>
                    <li><a href="#!">Second</a></li>
                    <li><a href="#!">Third</a></li>
                    <li><a href="#!">Fourth</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="collapsible-header waves-effect">North America<i className="material-icons" style={styles}>arrow_drop_down</i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#!">First</a></li>
                    <li><a href="#!">Second</a></li>
                    <li><a href="#!">Third</a></li>
                    <li><a href="#!">Fourth</a></li>
                  </ul>
                </div>
              </li>              
              <li>
                <a className="collapsible-header waves-effect">South America<i className="material-icons" style={styles}>arrow_drop_down</i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#!">First</a></li>
                    <li><a href="#!">Second</a></li>
                    <li><a href="#!">Third</a></li>
                    <li><a href="#!">Fourth</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="collapsible-header waves-effect">Africa<i className="material-icons" style={styles}>arrow_drop_down</i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#!">First</a></li>
                    <li><a href="#!">Second</a></li>
                    <li><a href="#!">Third</a></li>
                    <li><a href="#!">Fourth</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="collapsible-header waves-effect">Asia<i className="material-icons" style={styles}>arrow_drop_down</i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#!">First</a></li>
                    <li><a href="#!">Second</a></li>
                    <li><a href="#!">Third</a></li>
                    <li><a href="#!">Fourth</a></li>
                  </ul>
                </div>
              </li>    
              <li>
                <a className="collapsible-header waves-effect">Oceania<i className="material-icons" style={styles}>arrow_drop_down</i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#!">First</a></li>
                    <li><a href="#!">Second</a></li>
                    <li><a href="#!">Third</a></li>
                    <li><a href="#!">Fourth</a></li>
                  </ul>
                </div>
              </li>                                      
            </ul>
          </li>
        </ul>
        <a onClick={this.hideNav} href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    )
  }
}

class Map extends React.Component {
  componentDidMount() {
    AmCharts.makeChart( "mapdiv", {
      "type": "map",
      "preventDragOut": true,
      "dragMap": true,
      "theme": "dark",
      "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true
      },
      "areasSettings": {
        "autoZoom": true,
        "color": "#d7dde5",
        "outlineThickness": 1,
        "colorSolid" : "#84ADE9",
        "selectedColor" : "#84ADE9",
        "outlineColor" : "#666666",
        "rollOverColor" : "#9EC2F7",
        "rollOverOutlineColor" : "#000000"
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


