import React from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Startup from "./components/Startup";
// import { render } from '@testing-library/react';




class App extends React.Component{

  render () {
    return(
      <div className="container-fluid">
        <Navbar />
        <Searchbar />
        <Startup />

      </div>
    );
  };
}


export default App;
