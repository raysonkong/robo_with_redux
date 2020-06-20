const initial_state = {
    isPending: true,
    robots: [],
    error: ''
}

const requestRobotsReducer = (state=initial_state, action) => {
    switch(action.type) {
        case 'REQUEST_ROBOTS_PENDING':
          return Object.assign({}, state, {isPending: true});
        case 'REQUEST_ROBOTS_SUCCESS':
          return Object.assign({}, state, {isPending: false, robots: action.payload});
        case 'REQUEST_ROBOTS_FAILED':
          return Object.assign({}, state, {isPending: false, error: action.payload});
        default: 
          return state;
    }
}


export default requestRobotsReducer;