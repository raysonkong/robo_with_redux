const initialState = {
    isPending: true,
    robots: [],
    error: ''
}

const requestRobotsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'REQUEST_ROBOTS_PENDING':
          return Object.assign({}, state, {isPending: false});
        case 'REQUEST_ROBOTS_SUCCESS':
          return Object.assign({}, state, {isPending: false, robots: action.payload});
        case 'REQUEST_ROBOTS_FAILED':
          return Object.assign({}, state, {isPending: false, error: action.payload});
        default: 
          return state;
    }
} 


export default requestRobotsReducer;