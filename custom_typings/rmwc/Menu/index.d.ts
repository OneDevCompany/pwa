import * as React from 'react';
import { SimpleTag } from '../Base';
import { List, ListItem } from '../List';

/****************************************************************
 * Public
 ****************************************************************/

/** This is just the ListItem component exported from the Menu module for convenience. */
export class MenuItem extends List { }

/** A Menu Anchor. When using the anchorCorner prop of Menu, you must set MenuAnchors position to absolute. */
export class MenuAnchor extends SimpleTag<HTMLDivElement> { }

// prettier-ignore
type Anchor = 'bottomEnd' | 'bottomLeft' | 'bottomRight' | 'bottomStart' | 'topEnd' | 'topLeft' | 'topRight' | 'topStart';

export type MenuProps = {
  /** Whether or not the Menu is open. */
  open?: boolean,
  /** Callback that fires for either onSelected or onCancel, convenient for setting the closed state. */
  onClose?: (event: React.SyntheticEvent) => void,
  /** Callback that fires when a Menu item is selected. */
  onSelected?: (event: { detail: { index: number, item: HTMLElement } } & React.SyntheticEvent) => void,
  /** Callback that fires when the menu is closed with nothing selected. */
  onCancel?: (event: React.SyntheticEvent) => void,
  /** Manually position the menu to one of the corners. */
  anchorCorner?: Anchor,
  /** Children to render */
  children?: React.ReactNode
};

/** A menu component */
export class Menu extends React.Component<MenuProps> { }

export type SimpleMenuProps = {
  /** An element that will open the menu when clicked  */
  handle: React.ReactNode,
  /** By default, props spread to the Menu component. These will spread to the MenuAnchor which is useful for things like overall positioning of the anchor.   */
  rootProps?: Object,
  /** Children to render */
  children?: React.ReactNode
} & MenuProps;

export type SimpleMenuState = {
  open: boolean
};

/**
 * A Simplified menu component that allows you to pass a handle element and will automatically control the open state and add a MenuAnchor
 */
export class SimpleMenu extends React.Component<SimpleMenuProps, SimpleMenuState> { }
