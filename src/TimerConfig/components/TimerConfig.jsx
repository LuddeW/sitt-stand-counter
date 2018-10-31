import React, { Component } from 'react';

class Config extends Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev){
    const newBaseTime = this.props.baseTime

    if(ev.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(ev.target.value, 10), 'minutes')
    if(ev.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(ev.target.value, 10), 'seconds')

    this.props.setBaseTime(newBaseTime);
  }

  render(){
    return(
      <div className="row">
        <h2 className="text-primary">Set Timer Option</h2>
        <div className="row control-row">
          <div className="form-inline">
            <div className="col-sm-3">
              <label htmlFor="minutes">Minutes</label>
            </div>
            <div className="col-sm-9">
              <input 
                id="minutes" 
                className="form-control" 
                type="range"
                min="0"
                max="59" 
                defaultValue={this.props.baseTime.get('minutes')}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row control-row"> 
          <div className="form-inline">
            <div className="col-sm-3">
              <label htmlFor="seconds">Seconds</label>
            </div>
            <div className="col-sm-9">
              <input 
                id="seconds" 
                className="form-control" 
                type="range"
                min="0"
                max="59" 
                defaultValue={this.props.baseTime.get('seconds')}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    )
    }
}

export default Config;