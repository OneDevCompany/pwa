import * as React from 'react';
import { Component } from 'react';
import Link from 'next/link';
import { Datagrid, SquareButton } from 'components/ui';
import { getPeople, Person } from '../src/pages/indexData';
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

type State = Readonly<typeof initialState>;

const initialState = {
  loading: true,
  items: [] as Person[],
};

export default class extends Component<{}, State> {
  readonly state: State = initialState;

  async componentDidMount() {
    const items = await getPeople();
    this.setState({ items, loading: false });
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
        query={{
          order: 'asc',
          orderBy: 'email',
        }}
        tableColumns={[
          { key: 'name', header: 'Name' },
          { key: 'email', header: 'Email' },
          { key: 'occupation', header: 'Occupation', noSort: true, style: { flexBasis: 180 } },
          { key: 'age', header: 'Age', style: { flexBasis: 100 } },
        ]}
        {...this.state}
      />
    );
  }
}

// export default () => (
//   <Query query={getPeopleQuery}>
//     {({ loading, error, data }) => {
//       if (error) {
//         return <div>Error :(</div>;
//       }

//       return (
//         <Datagrid
//           loading={loading}
//           mainButton={
//             <Link href="/other">
//               <SquareButton
//                 noRipple
//                 onlyRightBorder
//                 primary
//                 use="add"
//               />
//             </Link>
//           }
//           items={data.people}
//           itemUniqueKey="email"
//           tableColumns={[
//             { key: 'name', header: 'Name' },
//             { key: 'email', header: 'Email' },
//             { key: 'occupation', header: 'Occupation', noSort: true, style: { flexBasis: 180 } },
//             { key: 'age', header: 'Age', style: { flexBasis: 100 } },
//           ]}
//         />
//       );
//     }}
//   </Query>
// );
