import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './configureStore';
import Root from './Components/Root/Root'
const store = configureStore();

ReactDOM.render(
    <Root store={store}></Root>,
    document.getElementById("root")
);

