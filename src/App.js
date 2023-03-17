import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import Routes from './routes';
import Header from './components/Header';
import store from './store';
import history from './services/history';

export default function App() {
  return (
    <Provider store={store} >
      <BrowserRouter history={history}>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>

  );
}
