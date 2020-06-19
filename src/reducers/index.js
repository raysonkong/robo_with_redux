import { combineReducers } from 'redux';
import searchFieldReducer from './searchFieldReducer';
import requestRobotsReducer from './requestRobotsReducer';

const rootReducer = combineReducers({
    searchField: searchFieldReducer,
    requestRobotsResult: requestRobotsReducer
})


export default rootReducer;