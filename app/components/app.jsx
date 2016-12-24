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
  constructor() {
    super();
    this.state = {
      selectedCodes: [],
    };

    // Hacky bind for now
    this.updateSelectedCodes = this.updateSelectedCodes.bind(this);
  }

  updateSelectedCodes(code, isSelected) {
    let newSelectedCodes = this.state.selectedCodes;
    if (isSelected && this.state.selectedCodes.indexOf(code) === -1) newSelectedCodes.push(code);
    if (!isSelected) newSelectedCodes.splice(newSelectedCodes.indexOf(code), 1);
    this.setState({
      selectedCodes: newSelectedCodes
    });

  }

  componentDidMount() {
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav();
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
        <SidePanel continents={continents} countries={countries} selectedCodes={this.state.selectedCodes} updateSelectedCodes={this.updateSelectedCodes}/>
        <Map selectedCodes={this.state.selectedCodes} updateSelectedCodes={this.updateSelectedCodes}/>
      </div>
    )
  }
}

class SidePanel extends React.Component {
  constructor(props) {
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
        country['isSelected'] = (this.props.selectedCodes.indexOf(country['code']) != -1);
      });

      continentRows.push(<SidePanelTopRow continent={continent} key={continent.name} updateSelectedCodes={this.props.updateSelectedCodes}/>);
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

class SidePanelTopRow extends React.Component{
  render() {
    let styles = {
      'float': 'right'
    }

    var countries = [];
    this.props.continent.countries.forEach( (country) => {
      countries.push(<SidePanelTopRowChildren name={country['name']} isSelected={country['isSelected']} code={country['code']} key={country['code']} updateSelectedCodes={this.props.updateSelectedCodes} />);
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

class SidePanelTopRowChildren extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: this.props.isSelected,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isSelected: nextProps.isSelected
    });
  }

  handleChange() {
    let newSelectedState = !this.state.isSelected

    this.setState({
      'isSelected': newSelectedState
    });

    this.props.updateSelectedCodes(this.props.code, newSelectedState);
  }

  render() {
    let styles = {
      'backgroundColor': this.state.isSelected ? '#D3D3D3' : '#FFFFFF'
    }

    return (
      <li>
        <a href="#!" onClick={this.handleChange} style={styles}>{this.props.name}</a>
      </li>
    )
  }
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCodes: this.props.selectedCodes,
      map: null
    };
    this.markSelected = this.markSelected.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedCodes: nextProps.selectedCodes
    });
    this.markSelected();
  }
  
  componentDidMount() {
    let map = AmCharts.makeChart( "mapdiv", {
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

    this.setState({'map': map});
    this.markSelected();
    map.addListener("clickMapObject", function(e){this.handleMapClick(e, map)}.bind(this));
  }

  markSelected() {
    let selectedCodes = this.state.selectedCodes;
    if (selectedCodes.length === 0) return;

    for (let i = 0; i < selectedCodes.length; i++) {
      let area = this.state.map.getObjectById(selectedCodes[i]);
      area.showAsSelected = true;
      this.state.map.returnInitialColor(area);
    }
  }

  handleMapClick(e, map) {
    let codeClicked = e.mapObject.id;
    let showCode = !e.mapObject.showAsSelected;

    // Update map to select/deselect country
    e.mapObject.showAsSelected = showCode;
    map.returnInitialColor( e.mapObject );

    let newSelectedCodes = this.state.selectedCodes;
    if (showCode) newSelectedCodes.push(codeClicked);
    if (!showCode) newSelectedCodes.splice(newSelectedCodes.indexOf(codeClicked), 1);
    this.setState({
      selectedCodes: newSelectedCodes
    });

    this.props.updateSelectedCodes(codeClicked, showCode);
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
