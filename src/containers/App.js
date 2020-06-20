import React from 'react';
import CardsList from '../components/CardsList';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
    requestedRobots: state.requestRobots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFieldChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        robots: []
    }
  }

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const {searchField, onSearchFieldChange, requestedRobots} = this.props;

    const {robots} = requestedRobots;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return(
      <div className="tc">
        <h1 className="f2 title">RoboFriends</h1>
        <SearchBox onSearchfieldChange={onSearchFieldChange} />
        <Scroll >
          <ErrorBoundary>
            <CardsList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
