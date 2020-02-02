import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './Redux/store'
import User from './Components/user'
import WithOutaction from './Components/withOutaction'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      <User />
      <WithOutaction />
      </header>
    </div>
    </Provider>
  );
}

export default App;
