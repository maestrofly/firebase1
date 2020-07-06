import React from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import Navbar from "./components/Navbar";
import { render } from '@testing-library/react';




class App extends React.Component{

  render () {
    return(
      <div className="container-fluid">
        <Navbar />
      </div>
    );
  }
}


export default App;
