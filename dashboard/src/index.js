import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
