import {combineReducers} from 'redux';
import credentials from './dataLogin-reducer';

const rootReducer = combineReducers({
    credentials
});

export default rootReducer;