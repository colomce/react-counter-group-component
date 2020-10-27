import { combineReducers } from 'redux';

const size = (state = 0, action) => {
    switch(action.type) {
        case "UPDATE_COUNTER_SIZE" :
            return action.payload;

        default:
            return state;
    }
}

export default combineReducers({
    size
});