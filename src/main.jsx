import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Store/Store'; // Adjust the path to your store file
import App from './App'; // Adjust the path to your main App component
import './index.css';  


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
