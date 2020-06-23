export const setSearchField = (text) => {
    return {
      type: 'SET_SEARCH_FIELD',
      payload: text
    }
}

export const requestRobots = () => (dispatch) => {
    dispatch({type: 'REQUEST_ROBOTS_PENDING'})

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => dispatch({type: 'REQUEST_ROBOTS_SUCCESS', payload: users}))
    .catch(error => dispatch({type: 'REQUEST_ROBOTS_FAILED', payload: error}))
}