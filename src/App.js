import React, { Component } from 'react';
import './App.css';

import Doctors from "./containers/Doctors/Doctors";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Doctors />
      </div>
    );
  }
}

export default App;
