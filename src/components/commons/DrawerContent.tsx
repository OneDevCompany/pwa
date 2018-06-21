import * as React from 'react';
import { Fragment, SFC } from 'react';
import { Link } from 'components/commons';
import { ListItem, ListItemText } from 'rmwc/List';

const links = [
  { href: '/', text: 'Home' },
  { href: '/other', text: 'Other' },
];

export const DrawerContent: SFC<{}> = () => (
  <Fragment>
    {links.map(({ href, text }) => (
      <Link key={href} href={href}>
        <ListItem theme="on-secondary">
          <ListItemText>{text}</ListItemText>
        </ListItem>
      </Link>
    ))}
  </Fragment>
);
