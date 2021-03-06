import React, { Component } from 'react';
import * as timerStates from '../../TimerStates.js';
class Button extends Component {
    constructor(){
        super();

        this.getButton = this.getButton.bind(this);
    }

    getButton(){
        if(this.props.timerState === timerStates.NOT_SET)
            return (<button className="btn btn-success mx-auto" onClick={this.props.startTimer}>Start</button>)
            
        if(this.props.timerState === timerStates.RUNNING)
            return (<button className="btn btn-danger mx-auto" onClick={this.props.stopTimer}>Stop</button>)

        if(this.props.timerState === timerStates.COMPLETE)
            return (<button className="btn btn-info mx-auto" onClick={this.props.stopTimer}>Reset</button>)
    }

    render(){
        return(
            <div className="row">
                {this.getButton()}
            </div>
        )
    }
}


export default Button;