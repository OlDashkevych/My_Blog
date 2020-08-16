import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [ReduxThunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});
