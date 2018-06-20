import * as React from 'react';
import { HTMLProps, MouseEvent, SFC } from 'react';
import { UrlLike } from 'next/link';
import { withRouter, WithRouterProps } from 'next/router';

type LinkExternalProps = {
  href: UrlLike | string;
} & HTMLProps<HTMLAnchorElement>;

type LinkInternalProps = LinkExternalProps & WithRouterProps;

const LinkComponent: SFC<LinkInternalProps> = ({ children, router, href, ...otherProps }) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  const props = {
    className: `odc-link ${isActive({ href, router }) ? 'active' : ''}`,
    href,
    ...otherProps,
  };

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

function isActive({ href, router }: LinkInternalProps) {
  return router.pathname === href;
}

export const Link: SFC<LinkExternalProps> = withRouter(LinkComponent) as any;
