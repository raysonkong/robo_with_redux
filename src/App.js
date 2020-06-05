import React from 'react';
import CardsList from './CardsList';
import './App.css';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        robots: [],
        searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({robots: users}))
  }

  onSearchfieldChange = (event) => {
    console.log(event.target.value)
    this.setState({searchfield: event.target.value});
  }

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return(
      <div className="tc">
        <h1 className="f2 title">RoboFriends</h1>
        <SearchBox onSearchfieldChange={this.onSearchfieldChange} />
        <Scroll >
          <CardsList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
