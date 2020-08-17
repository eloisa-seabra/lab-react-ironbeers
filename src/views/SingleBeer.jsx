import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadSingleBeer } from '../services/beers';

class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beers: {},
    };
  }

  componentDidMount() {
    loadSingleBeer(this.props.match.params.id)
      .then((data) => {
        this.setState({
          loaded: true,
          beers: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <div>
          <h1>Single beer </h1>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
