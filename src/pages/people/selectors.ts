// import { VenuesPageQuery } from 'models';
import { actions, State as PeopleState } from 'src/redux/modules/people';
import { Query } from 'components/ui';

export type MapStateToProps = PeopleState;
export type MapDispatchToProps = typeof actions;

type State = {
  people: PeopleState;
};

export const mapStateToProps = ({ people }: State): MapStateToProps => ({
  ...people,
  // loading: state.app.loading,
});

// TODO: learn hot to safetype with redux using redux-act
export const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchInitialData: () => dispatch(actions.fetchInitialData()),
    fetchItems: (query: Query) => dispatch(actions.fetchItems(query)),
  } as MapDispatchToProps;
};
