import React, {Component} from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Router>
        <header className="site-header">
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/About'>About</Link>
              </li>
              <li>
                <Link to='/List'>List</Link>
              </li>
            </ul>
          </nav>
        </header>
      </Router>
    )
  }
}

export default Header;
