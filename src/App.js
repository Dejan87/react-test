import React, { Component } from 'react';
import './App.css';

import Doctors from "./containers/Doctors/Doctors";
import Patients from "./containers/Patients/Patients";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Doctors />
        <Patients />
      </div>
    );
  }
}

export default App;
