import React, {Component} from 'react'

import Panel from './Panel'

import TextPanel from './TextPanel'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class PanelsArea extends Component {

    constructor(props){
      super(props);

      const states = require('./data/states_list.json');
      states.sort();
      const defaultState = states[0];

      const countries = ['United States'];
      const defaultCountry = countries[0];


      this.state = {
      stateList: states,
      countryList: countries,
      currentCountry: defaultCountry,
      currentState: defaultState,
    };
    this._onSelectCountry = this._onSelectCountry.bind(this);
    this._onSelectState = this._onSelectState.bind(this);
    }


      _onSelectState (option) {
        console.log('You selected ', option.label)
        this.setState({currentState: option.label})
        // console.log('current state ', this.state.currentState)
        // const selectedStateData = require('./data/'+this.state.currentState +'.json');
        // this.setState({currentStateData: selectedStateData})
        console.log("current state : ", this.state.currentState)
        // console.log('selexted: ', this.state.currentStateData)

      }

      _onSelectCountry(option) {
        // console.log('You selected ', option.label)
        this.setState({currentCountry: option.label}) 
      }
    


    render() {
    
      return (
  
        <React.Fragment>
        <div class="dropdown">
        <Dropdown options={this.state.countryList} onChange={this._onSelectCountry} value={this.state.currentCountry} placeholder="Select an option" />;
        </div>
        <div class="dropdown">
        <Dropdown options={this.state.stateList} onChange={this._onSelectState} value={this.state.currentState} placeholder="Select an option" />;
        </div>
        
        <Panel currentState={this.state.currentState} name="numvaccinated"/>
        <TextPanel currentState={this.state.currentState} name="numvaccinated"/>
        {/* <Panel data={data} name="numvaccinatesd"/>
        <Panel data={data} name="numvaccinatssesd"/> */}
          {/* <td><Panel data={data} name="numvaccinated"/></td> */}
   
          {/* <Panel data={data} name="numvaccinated"/> */}
          {/* <Panel data={data2} name="totalvaccinated"/>
          <Panel data={data2} name="x1"/>
          <Panel data={data2} name="y1"/>
          <Panel data={data2} name="z1"/>  */}
        </React.Fragment>

      )
    }
  }



export default PanelsArea
