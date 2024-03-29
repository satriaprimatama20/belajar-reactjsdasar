import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Variable from './reactjsdasar/variable';
import reportWebVitals from './reportWebVitals';
// import Lifecycle from './reactjsdasar/lifecycle';
// import MAP from './reactjsdasar/map';
// import StateProp from './reactjsdasar/stateprop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud/crudindex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
