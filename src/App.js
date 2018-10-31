import React, { Component } from 'react';
import Timer from './Timer/components/Timer.jsx'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="card app-content mx-auto">
        <div className="card-body">
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
