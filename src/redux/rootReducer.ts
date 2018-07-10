import { combineReducers } from 'redux';
import people from './modules/people';
// import {app} from './global/reducers';

export const rootReducer = combineReducers({
  people,
});
