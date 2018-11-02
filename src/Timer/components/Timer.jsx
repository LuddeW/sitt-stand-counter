import React, { Component } from 'react';
import moment, { min } from 'moment';
import Push from 'push.js';
import TimerHeader from '../../TimerHeader/components/TimerHeader.jsx'
import TimerDisplay from '../../TimerDisplay/components/TimerDisplay.jsx'
import TimerButton from '../../TimerButton/components/TimerButon.jsx'
import TimerConfig from '../../TimerConfig/components/TimerConfig.jsx'
import * as timerState from '../../TimerStates.js'

class Timer extends Component {
    constructor(){
        super();

        this.state = {
            currentTime: moment.duration(20, 'minutes'),
            baseTime: moment.duration(20, 'minutes'),
            timerState: timerState.NOT_SET,
            timer: null,
        }

        this.setBaseTime = this.setBaseTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.reduceTimer = this.reduceTimer.bind(this);
    }

    componentWillMount(){
        if(Push.Permission.has()) Push.Permission.get()

        localStorage.getItem('time') && this.setState({
            currentTime: moment.duration(localStorage.getItem('time')),
            baseTime: moment.duration(localStorage.getItem('time'))
        })
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('time', (nextState.baseTime))
    }

    setBaseTime(newBaseTime){
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime
        });
    }

    startTimer(){
        this.setState({
            timerState: timerState.RUNNING,
            timer: setInterval(this.reduceTimer, 1000),
        })


    }

    stopTimer(){
        if(this.state.timer){
            clearInterval((this.state.timer))
        }
        this.setState({
            timerState: timerState.NOT_SET,
            timer: null,
            currentTime: moment.duration(this.state.baseTime),
        })
    }

    reduceTimer(){
        if(this.state.currentTime.get('minutes') === 0 
            && this.state.currentTime.get('seconds') === 0){
            this.completeTimer();
            return;
        }
        const newTime = moment.duration(this.state.currentTime)
        newTime.subtract(1, 'second')

        this.setState({
            currentTime: newTime,
        })
    }

    completeTimer(){
        if(this.state.timer){
            clearInterval((this.state.timer))
        }
        this.setState({
            timerState: timerState.COMPLETE,
            timer: null,
        })
        Push.create("Time to change the table", {
            body: "Time to stand or sit",
            timeout: 40000,
            vibrate: [200,100,200]
        })
    }

    render() {
        return(
            <div className="container-fluid">
                <TimerHeader />
                <TimerDisplay 
                    currentTime={this.state.currentTime}
                />
                <TimerButton 
                    startTimer={this.startTimer} 
                    stopTimer={this.stopTimer}
                    timerState={this.state.timerState}
                />
                {
                    (this.state.timerState !== timerState.RUNNING)
                        &&
                        (<TimerConfig 
                        baseTime={this.state.baseTime}
                        setBaseTime={this.setBaseTime}    
                        />)    
                }
            </div>
        )
    }
}


export default Timer;