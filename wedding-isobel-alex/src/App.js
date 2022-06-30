import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,
  Switch,
  Route,
  Routes } from 'react-router-dom';
import home from './components/pages/index';
import about from './components/pages/about';
import contact from './components/pages/contact';
import reservation from './components/pages/reservation';

  
function App() {
  return (
    //<div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/about' component={about} />
        <Route path='/contact' component={contact} />
        <Route path='/index' component={home} />
        <Route path='/reservation' component={reservation} />
      </Routes>
    </Router>
     // <header className="App-header">
      //  <img src={logo} className="App-logo" alt="logo" />
       // <p>
       //   Isobel and Alex wedding!!
       // </p>
       // <a
        //---  className="App-link"
       ///   href="https://reactjs.org"
         // target="_blank"
          //rel="noopener noreferrer"
       // >
        //  Learn React
     //   </a>
     // </header>
    //</div>
  );
}

export default App;
