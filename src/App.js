import React from 'react';
import './App.css';
import Patterson_practice from './Components/Patterson_practice'
import { Route, BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() { 
    return <div>
        <Patterson_practice/>
    </div>;
  }
}

export default App;
