import { combineReducers } from 'redux';

import authReducers from './authReducers';
import errorReducers from './errorReducers';

const rootReducers = combineReducers({
  auth: authReducers,
  error: errorReducers,
});

export default rootReducers;
