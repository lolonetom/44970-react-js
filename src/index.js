import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
initializeApp({
  apiKey: "AIzaSyCZw1LjnKdAlq7YOHdQRQ_CWF4t_zJoy1I",
  authDomain: "proyecto-react-94935.firebaseapp.com",
  projectId: "proyecto-react-94935",
  storageBucket: "proyecto-react-94935.appspot.com",
  messagingSenderId: "572082547531",
  appId: "1:572082547531:web:c9230d8ccc2f5d479016ce"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
