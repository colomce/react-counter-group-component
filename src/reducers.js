import { combineReducers } from 'redux';

const size = (state = 0, action) => {
    switch(action.type) {
        case "UPDATE_COUNTER_SIZE" :
            return action.payload;

        default:
            return state;
    }
}

const sum = (state = 0, action) => {
    switch(action.type) {
        case "INCREASE_SUM" :
            return ++state;
        case "DECREASE_SUM" :
            return --state;
        default:
            return state;
    }
}

export default combineReducers({
    size,
    sum
});