import { Children, cloneElement, HTMLProps, MouseEvent, SFC } from 'react';
import { UrlLike } from 'next/link';
import { withRouter, WithRouterProps } from 'next/router';

type LinkExternalProps = {
  href: UrlLike | string;
} & HTMLProps<HTMLAnchorElement>;

type LinkInternalProps = LinkExternalProps & WithRouterProps;

const LinkComponent: SFC<LinkInternalProps> = ({ children, router, href, onClick, ...otherProps }) => {
  const handleClick = (href: UrlLike) => (e: MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  const props = {
    activated: isActive({ href, router }),
    onClick: handleClick(href as any),
    ...otherProps,
  };

  const child = Children.only(children);

  return cloneElement(child, props);
};

function isActive({ href, router }: LinkInternalProps) {
  return router.pathname === href;
}

export const Link: SFC<LinkExternalProps> = withRouter(LinkComponent) as any;
