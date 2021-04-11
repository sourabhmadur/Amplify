import React, {Component} from 'react'
import Plot from 'react-plotly.js';

import Chart from 'chart.js';

class Panel extends Component{
    constructor(props){
        super(props);
    this.state = {chart: null};
    }
    t

    componentDidMount(props){
        var ctx = document.getElementById(this.props.name).getContext('2d');
        this.setState({chart : new Chart(ctx, this.props.data)});
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