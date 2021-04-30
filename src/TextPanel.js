import React, {Component} from 'react'
import Plot from 'react-plotly.js';

import Chart from 'chart.js';

import equal from 'fast-deep-equal'

class TextPanel extends Component{
    constructor(props){
    super(props);
    this.state = {date : null};
    }
    

    componentDidMount(props){
        const defaultData=require('./data/'+this.props.currentState +'_herd_immunity_date.json');
        this.setState({date: defaultData['date']});
    }

    componentDidUpdate(prevProps) {
        try{
            if(!equal(this.props.currentState, prevProps.currentState)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            const dataToRender = require('./data/'+this.props.currentState +'_herd_immunity_date.json')
            this.setState({date: dataToRender['date']});
            
        }

        } catch {
            console.log("errors")
        }
        
      } 
      

    render(){
        return (
                <div class="textpanel">
                <p class="prediction_text">Herd Immunity Date: {this.state.date}</p>
            </div>
            
            
          )
    }

}

export default TextPanel;