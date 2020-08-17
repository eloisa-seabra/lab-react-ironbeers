import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomeView from './views/HomeView';
import AllBeers from './views/AllBeers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import SingleBeer from './views/SingleBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/beers" component={AllBeers} exact />
          <Route path="/random-beer" component={RandomBeer} exact />
          <Route path="/new-beer" component={NewBeer} exact />
          <Route path="/beers/:id" component={SingleBeer} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
