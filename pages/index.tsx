import * as React from 'react';
import Link from 'next/link';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Datagrid, SquareButton } from 'components/ui';
import {
  PeoplePageProps,
  mapStateToProps,
  mapDispatchToProps,
  MapStateToProps,
  MapDispatchToProps,
} from 'src/pages/people';
// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';

// TODO: refactor. Move to a .graphql file
// const getPeopleQuery = gql`
//   query {
//     people {
//       name
//       email
//       occupation
//       age
//     }
//   }
// `;

// TODO: type safe for <Query> children function: loading, error and data.
// TODO: loading prop for Datagrid
// TODO: write typings for isomorphic-unfetch or change this to isomorphic-fetch package if it has types.
// TODO: when !!error, show snackbar
// TODO: change items and itemUniqueKey props name for data and dataUniqueKey

class PeoplePage extends Component<PeoplePageProps> {
  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <Datagrid
        itemUniqueKey="email"
        mainButton={
          <Link href="/other">
            <SquareButton
              noRipple
              onlyRightBorder
              primary
              use="add"
            />
          </Link>
        }
        tableColumns={[
          { key: 'name', header: 'Name' },
          { key: 'email', header: 'Email' },
          { key: 'occupation', header: 'Occupation', style: { flexBasis: 180 } },
          { key: 'age', header: 'Age', style: { flexBasis: 100 } },
        ]}
        onQueryChange={console.log}
        {...this.props}
      />
    );
  }
}

export default connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(PeoplePage);
