import React, {Component} from 'react'

import Panel from './Panel'

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


    render() {
    
      return (
        <React.Fragment>
          <Panel data={data1} name="numvaccinated"/>
          {/* <Panel data={data2} name="totalvaccinated"/>
          <Panel data={data2} name="x1"/>
          <Panel data={data2} name="y1"/>
          <Panel data={data2} name="z1"/>  */}
        </React.Fragment>

      )
    }
  }



export default PanelsArea
