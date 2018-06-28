import * as React from 'react';
import Link from 'next/link';
import { Fragment, SFC } from 'react';
import { ListItem, ListItemText } from 'rmwc/List';
import { withRouter, WithRouterProps } from 'next/router';

const links = [
  { href: '/', text: 'Home' },
  { href: '/other', text: 'Other' },
];

const DrawerContentComponent: SFC<WithRouterProps> = ({ router }) => (
  <Fragment>
    {links.map(({ href, text }) => (
      <Link key={href} href={href}>
        <ListItem
          activated={isActive(href, router.pathname)}
          theme="on-secondary"
        >
          <ListItemText>{text}</ListItemText>
        </ListItem>
      </Link>
    ))}
  </Fragment>
);

function isActive(href: string, currentRoute: string) {
  return currentRoute === href;
}

export const DrawerContent: SFC<{}> = withRouter(DrawerContentComponent) as any;
