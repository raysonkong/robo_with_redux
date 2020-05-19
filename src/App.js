import React from 'react';
import Card from './Card';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="tc">
        <h1>RoboFriends</h1>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
export default App;
