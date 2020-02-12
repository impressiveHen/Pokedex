import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Home from './components/Home';
import Search from './components/Search';
import Links from './components/Links';
import NoMatch from './components/NoMatch';
import NavigationBar from './components/NavigationBar';
import Slider from './components/slider/Slider';

import sliderReducer from './components/slider/reducers/SliderReducers';
import pokedexReducer from './components/pokedex/reducers/PokedexReducers';

function App() {

  const rootReducer = combineReducers({
    slider: sliderReducer,
    pokedex: pokedexReducer 
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    // A common pattern in React is for a component to return multiple elements. 
    // Fragments let you group a list of children without adding extra nodes to the DOM.
    <React.Fragment>
      <Provider store={store}>
        <NavigationBar />
        <Slider />
        {/* pass as props.children */}
        <Router basename='/'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/links' component={Links} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
