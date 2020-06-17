const searchFieldReducer = (state='', action) => {
    switch(action.type) {
        case 'SET_SEARCH_FIELD':
          return action.payload;
        default:
          return state;
    }
}

export default searchFieldReducer;