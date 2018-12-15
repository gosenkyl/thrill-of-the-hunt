import {combineReducers} from 'redux';
import champions from './championsReducer';

const rootReducer = combineReducers({
    champions
});

export default rootReducer;