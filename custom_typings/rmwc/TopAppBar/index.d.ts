import * as React from 'react';
import { SimpleTag, SimpleTagProps } from '../Base';
import { IconButtonProps } from '../Icon';

/** A row for the app bar. */
export class TopAppBarRow extends SimpleTag<HTMLDivElement> { }

export type TopAppBarSectionProps = {
  /** Aligns the section to the start. */
  alignStart?: boolean,
  /** Aligns the section to the end. */
  alignEnd?: boolean
} & SimpleTagProps<HTMLElement>

/** A section for the app bar. */
export class TopAppBarSection extends React.Component<TopAppBarSectionProps> { }

/** A navigation icon for the top app bar. This is an instance of the Icon component. */
export class TopAppBarNavigationIcon extends React.Component<IconButtonProps> { }

/** Action items for the top app bar. This is an instance of the Icon component.*/
export class TopAppBarActionItem extends React.Component<IconButtonProps> { }

/** A title for the top app bar. */
export class TopAppBarTitle extends SimpleTag<HTMLSpanElement> { }

type TopAppBarProps = {
  /** Emits when the navigation icon is clicked. */
  onNav?: (evt: Event) => {},
  /** Styles the top app bar as a fixed top app bar. */
  fixed?: boolean,
  /** Styles the top app bar as a prominent top app bar. */
  prominent?: boolean,
  /** Styles the top app bar as a short top app bar. */
  short?: boolean,
  /** Styles the top app bar to always be collapsed. */
  shortCollapsed?: boolean,
  /** Styles the top app bar to be dense. */
  dense?: boolean
} & SimpleTagProps<HTMLElement>

/** A TopAppBar component */
export class TopAppBar extends React.Component<TopAppBarProps> { }
