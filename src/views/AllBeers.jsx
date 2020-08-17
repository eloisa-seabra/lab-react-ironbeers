import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { loadAllBeers } from './../services/beers';

export class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beers: [],
    };
  }

  componentDidMount() {
    loadAllBeers()
      .then((data) => {
        this.setState({
          beers: data,
          loaded: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <div>
            {this.state.beers.map((beer) => (
              <div key={beer.name}>
                <Link to="/:id">
                  <img style={{ width: '50px' }} src={beer.image_url} />
                  <h1>{beer.name}</h1>{' '}
                </Link>
                <h4>{beer.tagline}</h4>
                <p>
                  <strong>Created by:</strong>
                  {beer.contributed_by}
                </p>
              </div>
            ))}
          </div>
        </>
      </div>
    );
  }
}

export default AllBeers;
