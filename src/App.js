import React, { Component } from 'react'
import {Provider} from 'react-redux';
import './App.css';
import Header from './components/header';
import SongsList from './components/songs-list';
import store from './store/store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Header />
        <SongsList />
      </div>
    </Provider>
    )
  }
}


export default App;
