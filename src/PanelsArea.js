import React, {Component} from 'react'

import Panel from './Panel'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// const data = {
//   "type": "line",
//   "data": {
//       "labels": [
//           "2021-01-12",
//           "2021-01-13",
//           "2021-01-15",
//           "2021-01-19",
//           "2021-01-20",
//           "2021-01-21",
//           "2021-01-22",
//           "2021-01-23",
//           "2021-01-24",
//           "2021-01-25",
//           "2021-01-26",
//           "2021-01-27",
//           "2021-01-28",
//           "2021-01-29",
//           "2021-01-30",
//           "2021-01-31",
//           "2021-02-01",
//           "2021-02-02",
//           "2021-02-03",
//           "2021-02-04",
//           "2021-02-05",
//           "2021-02-06",
//           "2021-02-07",
//           "2021-02-08",
//           "2021-02-09",
//           "2021-02-10",
//           "2021-02-11",
//           "2021-02-12",
//           "2021-02-13",
//           "2021-02-14",
//           "2021-02-16",
//           "2021-02-17",
//           "2021-02-18",
//           "2021-02-19",
//           "2021-02-20",
//           "2021-02-21",
//           "2021-02-22",
//           "2021-02-23",
//           "2021-02-24",
//           "2021-02-25",
//           "2021-02-26",
//           "2021-02-27",
//           "2021-02-28",
//           "2021-03-01",
//           "2021-03-02",
//           "2021-03-03",
//           "2021-03-04",
//           "2021-03-05",
//           "2021-03-06",
//           "2021-03-07",
//           "2021-03-08",
//           "2021-03-09",
//           "2021-03-10",
//           "2021-03-11",
//           "2021-03-12",
//           "2021-03-13",
//           "2021-03-14",
//           "2021-03-15",
//           "2021-03-16",
//           "2021-03-17",
//           "2021-03-18",
//           "2021-03-19",
//           "2021-03-20",
//           "2021-03-21",
//           "2021-03-22",
//           "2021-03-23",
//           "2021-03-24",
//           "2021-03-25",
//           "2021-03-26",
//           "2021-03-27",
//           "2021-03-28",
//           "2021-03-29",
//           "2021-03-30",
//           "2021-03-31",
//           "2021-04-01",
//           "2021-04-02",
//           "2021-04-03",
//           "2021-04-04",
//           "2021-04-05",
//           "2021-04-06",
//           "2021-04-07",
//           "2021-04-08",
//           "2021-04-09",
//           "2021-04-10"
//       ],
//       "datasets": [
//           {
//               "label": "Percentage of People Fully Vaccinated",
//               "data": [
//                   0.34,
//                   0.39,
//                   0.62,
//                   0.75,
//                   0.79,
//                   0.9,
//                   1.11,
//                   1.31,
//                   1.42,
//                   1.48,
//                   1.5,
//                   1.61,
//                   1.85,
//                   2.1,
//                   2.31,
//                   2.46,
//                   2.55,
//                   2.55,
//                   2.55,
//                   2.74,
//                   2.87,
//                   3.04,
//                   3.31,
//                   3.31,
//                   3.55,
//                   3.7,
//                   3.7,
//                   3.7,
//                   3.7,
//                   3.7,
//                   4.78,
//                   4.9,
//                   4.9,
//                   5.64,
//                   5.65,
//                   5.66,
//                   6.88,
//                   6.95,
//                   7.18,
//                   7.19,
//                   7.2,
//                   8.06,
//                   8.09,
//                   8.1,
//                   8.1,
//                   8.11,
//                   8.11,
//                   9.53,
//                   10.03,
//                   10.06,
//                   11.06,
//                   11.32,
//                   11.64,
//                   11.71,
//                   12.82,
//                   12.86,
//                   13.8,
//                   14.17,
//                   14.35,
//                   14.36,
//                   14.38,
//                   15.25,
//                   15.27,
//                   15.28,
//                   16.37,
//                   16.49,
//                   16.51,
//                   17.2,
//                   17.76,
//                   18.42,
//                   18.92,
//                   19.29,
//                   19.39,
//                   19.69,
//                   20.21,
//                   21.08,
//                   21.93,
//                   22.92,
//                   23.71,
//                   23.78,
//                   24.26,
//                   25.06,
//                   26.18,
//                   27.42
//               ],
//               "backgroundColor": [
//                   "rgba(255, 99, 132, 0.2)"
//               ],
//               "borderColor": "rgba(255, 99, 132, 0.7)",
//               "borderWidth": 3
//           }
//       ]
//   },
//   "options": {
//       "scales": {
//           "x": {
//             "type": 'timeseries'
//           },
//           "yAxes": [
//               {
//                   "ticks": {
//                       "beginAtZero": true
//                   }
//               }
//           ]
//       }
//   }
// }

const data = require('./data/Alabama.json');





const data1 = {
  type: 'line',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: 'Number of people vaccinated',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
          ],
          borderColor : 'rgba(255, 99, 132, 0.7)',

          borderWidth:3
      }]
  },
  options: {
      
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
}
const data2 = {
  type: 'line',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: 'Number of people vaccinated',
          data: [1, 2, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
          ],
          borderColor : 'rgba(255, 99, 132, 0.7)',
          borderWidth:3
      }]
  },
  options: {
    maintainAspectRatio: false,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
}


class PanelsArea extends Component {

    constructor(props){
      super(props);


      const states = require('./data/states_list.json');
      const defaultState = states[0];

      const countries = ['United States'];
      const defaultCountry = countries[0];

      const defaultStateData = require('./data/'+defaultState +'.json');


      this.state = {
      stateList: states,
      countryList: countries,
      currentCountry: defaultCountry,
      currentState: defaultState,
      currentStateData : defaultStateData,
    };
    this._onSelectCountry = this._onSelectCountry.bind(this);
    this._onSelectState = this._onSelectState.bind(this);
    }


      _onSelectState (option) {
        console.log('You selected ', option.label)
        this.setState({currentState: option.label})
        console.log('current state ', this.state.currentState)
        const selectedStateData = require('./data/'+option.label +'.json');
        this.setState({currentStateData: selectedStateData})

        console.log('selexted: ', this.state.currentStateData)

      }

      _onSelectCountry(option) {
        console.log('You selected ', option.label)
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
