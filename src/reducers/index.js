import { combineReducers } from 'redux';
import searchFieldReducer from './searchFieldReducer';
import requestRobotsReducer from './requestRobotsReducer';

const rootReducer = combineReducers({
    searchField: searchFieldReducer,
    requestedRobots: requestRobotsReducer
})


export default rootReducer;