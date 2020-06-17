import { combineReducers } from 'redux';
import searchFieldReducer from './searchFieldReducer';

const rootReducer = combineReducers({
    searchField: searchFieldReducer
})


export default rootReducer;