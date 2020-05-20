import React from 'react';
import CardsList from './CardsList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({robots: users}))
  }

  render() {
    const {robots} = this.state;
    return(
      <div className="tc">
        <h1>RoboFriends Rock!!!!</h1>
        <CardsList robots={robots} />
      </div>
    );
  }
}
export default App;
