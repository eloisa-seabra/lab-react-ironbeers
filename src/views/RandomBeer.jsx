import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RandomBeer extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <div>
          <h1>Random beer generator</h1>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
