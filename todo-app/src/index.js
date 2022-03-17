import React from 'react'; //klasörün direk ismini vermesi içindeki js dosyasını kasteder
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //./App.js js yazmasa bile olur 
import reportWebVitals from './reportWebVitals';

//Burayı program.cs gibi düşünelim.Programın çalışması için gerekli dikkat et tek method var.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
