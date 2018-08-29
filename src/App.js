import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Student from './component/studentDetails/student_history'
// import RoutingData from './component/Routing/routing'

class App extends Component {
  render() {
    return (
      <div className="ui container">
          <Student />  
         {/* <RoutingData />  */}
      </div>
    );
  }
}

export default App;
