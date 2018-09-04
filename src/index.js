import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import App from "./containers/App.jsx";
import './index.css';
import { Provider } from 'react-redux';
import { store } from "./store/store";



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
