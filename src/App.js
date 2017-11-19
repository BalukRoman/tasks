import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./parts/Header"; 
import Home from './routers/Home';
import About from './routers/About';
import List from './routers/List';

import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
        <div className='page-content'>
          <Router>         
            <div className="page-inner">           
              <Route exact={true} path="/" component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/List" component={List}/>
            </div>
          </Router>
        </div>         
      </div>
    );
  }
}

export default App;
