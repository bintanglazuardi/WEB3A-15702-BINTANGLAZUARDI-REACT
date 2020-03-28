import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard2 from './components/Layout/Dashboard2/Dashboard2';
import SidebarLanding from './layout/SidebarLanding';
import Routing from './router/Router';

// function App(){
//   return(
//     <Dashboard2/>
//   ); 
// }

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <SidebarLanding/>
        <Routing/>
      </div>
    );
  }
}

export default App;
