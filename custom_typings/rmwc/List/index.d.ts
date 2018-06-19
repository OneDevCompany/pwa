import * as React from 'react';
import { SimpleTagProps, WithRippleProps, SimpleTag } from '../Base';
import { IconProps } from '../Icon';

type ListItemProps = {
  /** A modifier for a selected state. */
  selected?: boolean,
  /** A modifier for an active state. */
  activated?: boolean,
} & SimpleTagProps<HTMLDivElement>
  & WithRippleProps

/**
 * The ListItem component.
 */
export class ListItem extends React.Component<ListItemProps> { }

/** Text for the ListItem */
export class ListItemText extends SimpleTag<HTMLSpanElement> { }

/** Secondary text for the ListItem */
export class ListItemSecondaryText extends SimpleTag<HTMLSpanElement> { }

/** A graphic / icon for the ListItem */
export class ListItemGraphic extends React.Component<SimpleTagProps<HTMLElement> & IconProps> { }

/** A meta icon for the ListItem. By default this is an icon component. If you need to render text, specify a tag="span" and basename="" to ensure proper rendering. See the examples above.*/
export class ListItemMeta extends React.Component<SimpleTagProps<HTMLElement> & IconProps> { }

/** A container to group ListItems */
export class ListGroup extends SimpleTag<HTMLDivElement> { }

/** A subheader for the ListGroup */
export class ListGroupSubheader extends SimpleTag<HTMLDivElement> { }

/** A divider for the List */
export class ListDivider extends SimpleTag<HTMLHRElement> { }

export type ListProps = {
  /** Reduces the padding on List items. */
  dense?: boolean,
  /** Gives more space for dual lined list items. */
  twoLine?: boolean,
  /** Makes the list start detail circular for avatars. */
  avatarList?: boolean,
  /** Makes the list non interactive */
  nonInteractive?: boolean,
} & SimpleTagProps<HTMLDivElement>

export class List extends React.Component<ListProps> { }

export type SimpleListItemProps = {
  /** Text for the ListItem. */
  text?: React.ReactNode,
  /** Secondary Text for the ListItem. */
  secondaryText?: React.ReactNode,
  /** A graphic icon for the ListItem. */
  graphic?: React.ReactNode,
  /** A meta icon for the ListItem */
  meta?: React.ReactNode,
  /** Children to render */
  children?: React.ReactNode,
}

export class SimpleListItem extends React.Component<SimpleListItemProps> { }
