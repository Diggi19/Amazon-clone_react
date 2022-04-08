import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css'
import App from './components/App';
import { StateProvider } from './components/contextapi/StateProvider';
import reducer, { initialState } from './components/contextapi/reducer';
ReactDOM.render(
  <StateProvider initialstate={initialState} reducer={reducer}>
    <App/>
  </StateProvider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
