import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBeer extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <div>
          <h1>New beer </h1>
        </div>
      </div>
    );
  }
}

export default NewBeer;
