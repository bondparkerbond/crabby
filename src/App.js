import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Container } from 'muicss';
// import { Row, Col } from 'muicss';
// import Row from 'muicss/lib/react/row';
// import Col from 'muicss/lib/react/col';
import Blogs from './components/Blogs'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App center-align">
        <div className="row center-align App-header">
          <img src={logo} className="col m2 l2 hide-on-small-only App-logo" alt="logo" />
          <h3 className='col m8 l8 hide-on-small-only'>Create-React-Blog</h3>
          <img src={logo} className="col m2 l2 hide-on-small-only App-logo-reversed" alt="logo" />
          <h5 className='col s12 hide-on-med-and-up'>Create-React-Blog</h5>
          <img src={logo} className="col s12 hide-on-med-and-up App-logo" alt="logo" />
        </div>
        <Blogs />
      </div>
    );
  }
}

export default App;
