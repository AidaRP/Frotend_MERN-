import {combineReducers} from 'redux';
import credentials from './dataLogin-reducer';
import posts from './dataPost-reducer';

const rootReducer = combineReducers({
    credentials, posts
});

export default rootReducer;