import * as React from 'react';
import { SimpleTagProps, SimpleTag } from '../Base';
import { ListProps } from '../List';

/** A Header for Drawers */
export class DrawerHeader extends React.Component { }

/** If you are using fixed a Toolbar, this provides space for it. */
export class DrawerToolbarSpacer extends SimpleTag<HTMLDivElement> { }

/***************************************************************************************
 * Drawer Content
 ***************************************************************************************/
/** Content for Drawers. Please note this is an instance of mdc-list by default. You can change this to a a non list container by specifying the tag as 'div' or anything else. */
export class DrawerContent extends React.Component<ListProps> { }

/***************************************************************************************
 * Drawers
 ***************************************************************************************/

export type DrawerProps = {
  /** Opens or closes the Drawer. */
  open: boolean,
  /** Callback that fires when the Drawer is closed. */
  onClose?: (evt?: Event) => void,
  /** Callback that fires when the Drawer is opened. */
  onOpen?: (evt?: Event) => void,
  /** Makes a permanent drawer. */
  permanent?: boolean,
  /** Makes a persistent drawer. */
  persistent?: boolean,
  /** Makes a temporary drawer. */
  temporary?: boolean,
} & SimpleTagProps<HTMLElement>

/** A Drawer component */
export class Drawer extends React.Component<DrawerProps> { }
