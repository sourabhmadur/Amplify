import React, {Component} from 'react'
import Plot from 'react-plotly.js';

import Chart from 'chart.js';

import equal from 'fast-deep-equal'

class Panel extends Component{
    constructor(props){
    super(props);
    this.state = {chart: null, data : null};
    }
    

    componentDidMount(props){
        var ctx = document.getElementById(this.props.name).getContext('2d');
        const defaultData=require('./data/'+this.props.currentState +'.json');
        this.setState({data: defaultData});
        this.setState({chart : new Chart(ctx, defaultData)});
    }

    componentDidUpdate(prevProps) {
        try{
            if(!equal(this.props.currentState, prevProps.currentState)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            var ctx = document.getElementById(this.props.name).getContext('2d');
            console.log("current props:",this.props.currentState);
            const dataToRender = require('./data/'+this.props.currentState +'.json')
            this.setState({data: dataToRender});
            if(this.state.chart){
                this.state.chart.destroy();
            }
            
            this.setState({chart : new Chart(ctx, dataToRender)});
        }

        } catch {
            console.log("errors")
        }
        
      } 
      

    render(){
        return (
                <div class="panel">
                <canvas id={this.props.name}></canvas>
            </div>
            
            
          )
    }

}

export default Panel