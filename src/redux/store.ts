import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { peoplePageSaga } from './modules/people';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(peoplePageSaga);
