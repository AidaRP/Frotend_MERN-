import {combineReducers} from 'redux';
import credentials from './dataLogin-reducer';
import posts from './dataPost-reducer';
import comments from './dataComment-reducer';

const rootReducer = combineReducers({
    credentials, posts, comments
});

export default rootReducer;