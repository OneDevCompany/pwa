// import { VenuesPageQuery } from 'models';
import { actions, State as PeopleState } from 'src/redux/modules/people';

export type MapStateToProps = PeopleState;
export type MapDispatchToProps = typeof actions;

// export type MapDispatchToProps = {
//   // fetchInitialData: (query: Query) => void;
//   fetchInitialData: typeof actions['fetchInitialData'],
//   // fetchVenues: (venuesQuery: VenuesPageQuery) => void;
// };

type State = {
  people: PeopleState;
};

export const mapStateToProps = (state: State): MapStateToProps => ({
  ...state.people,
  // loading: state.app.loading,
});

// TODO: learn hot to safetype with redux using redux-act
export const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchInitialData: () => dispatch(actions.fetchInitialData()),
    // fetchVenues: (venuesQuery: Query) => dispatch(actions.fetchVenues(venuesQuery)),
  } as MapDispatchToProps;
};
