import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sample from './first';
import randerList from './Folder1/randerList';
import FolderSample from './Folder1/sampleFIle1';
import reportWebVitals from './reportWebVitals';
import ShoppingList from './Folder1/randerList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Sample />
    <FolderSample />
    <Sample />
    <ShoppingList />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
