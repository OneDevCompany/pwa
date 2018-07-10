import { createAction, createReducer } from 'redux-act';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Person } from 'models';
import { combineReducers } from 'redux';
import { Query } from 'components/ui';
import { getPeople } from 'src/pages/people/data';

const actionType = (uniqueType: string) => `people/${uniqueType}`;

// ACTIONS

export const actions = {
  fetchInitialData: createAction(actionType('FETCH_INITIAL_DATA_REQUESTED')),
  hideLoading: createAction(actionType('HIDE_LOADING')),
  showLoading: createAction(actionType('SHOW_LOADING')),
  setQuery: createAction<Query>(actionType('SET_QUERY')),
  setItems: createAction<Person[]>(actionType('SET_ITEMS')),
};

// STATE

export const initialState = {
  items: [] as Person[],
  // move to global state
  loading: false,
  query: {
    order: 'asc',
    orderBy: 'name',
  } as Query,
};

export type State = typeof initialState;

// REDUCERS

const items = createReducer({
  [actions.setItems as any]: (_, payload) => ([...payload]),
}, initialState.items);

const loading = createReducer({
  [actions.showLoading as any]: () => true,
  [actions.hideLoading as any]: () => false,
}, initialState.loading);

const query = createReducer({
  [actions.setQuery as any]: (_, payload) => ({...payload}),
}, initialState.query);

export default combineReducers({
  items,
  loading,
  query,
});

// SAGAS

function* fetchInitialDataSaga() {
  try {
    yield put(actions.showLoading());
    const people = yield call(getPeople);
    yield put(actions.setItems(people));
  } catch (e) {
    console.error(e);
  } finally {
    yield put(actions.hideLoading());
  }
}

export function* peoplePageSaga() {
  yield takeLatest(actions.fetchInitialData, fetchInitialDataSaga);
}
