import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Preloader from './preloader';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
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
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();
  }
  render() {
    const container = document.getElementById('travel-data');
    const travelData = JSON.parse(container.childNodes[0].data);
    
    const continents = travelData['continents'];
    const countries = travelData['countries'];
    const styles = {
      'textAlign': 'center'
    }

    return (
      <div id='profile-container'>
        <div className="col s4">
          <h2 style={styles}> Lets Build Your Travel Profile </h2>
          <h3 style={styles}> Where Have You Been? </h3>
        </div>
        <SidePanel continents={continents} countries={countries}/>
        <Map/>
      </div>
    )
  }
}

class SidePanelTopRowChildren extends React.Component {
  render() {
    return (
      <li><a href="#!">{this.props.name}</a></li>
    )
  }
}

class SidePanelTopRow extends React.Component{
  render() {
    let styles = {
      'float': 'right'
    }

    var countries = [];
    this.props.continent.countries.forEach( (country) => {
      countries.push(<SidePanelTopRowChildren name={country['name']} key={country.code}/>);
    });

    return (
      <li>
        <a className="collapsible-header waves-effect">{this.props.continent.name}<i className="material-icons" style={styles}>arrow_drop_down</i></a>
        <div className="collapsible-body">
          <ul>
            {countries}
          </ul>
        </div>
      </li>        
    )
  }
}

class SidePanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      continents: props.continents,
      countries: props.countries
    };
  }
  componentDidMount() {
    $('.button-collapse').sideNav({
      menuWidth: '288px'
    });
  }
  render() {
    const styles = {
      'float': 'right'
    }

    var continentRows = [];
    this.state.continents.forEach((continent) => {
      continent.countries.forEach((country) => {
        // Dumb hack based on my poorly designed data model
        let countrySearch = this.state.countries.find((countryLookup) => {
          return country['code'] === countryLookup['code'];
        });
        country['name'] = countrySearch['name'];
      });

      continentRows.push(<SidePanelTopRow continent={continent} key={continent.name}/>);
    });

    return (
      <div>
        <ul id="slide-out" className="side-nav fixed">
          <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
              {continentRows}
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
        "map": "worldHigh",
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


