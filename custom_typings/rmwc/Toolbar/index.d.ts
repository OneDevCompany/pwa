import * as React from 'react';
import { SimpleTag, SimpleTagProps } from '../Base';
import { IconButtonProps } from '../Icon';

/** A Toolbar title  */
export class ToolbarTitle extends SimpleTag<HTMLDivElement> { }

type ToolbarSectionProps = {
  /** Aligns the ToolbarSection at the start. */
  alignStart?: boolean,
  /** Aligns the ToolbarSection at the end. */
  alignEnd?: boolean,
  /** Makes the ToolbarSection shrink to fit. */
  shrinkToFit?: boolean
} & SimpleTagProps<HTMLElement>

export class ToolbarSection extends React.Component<ToolbarSectionProps> { }

/** A Toolbar row  */
export class ToolbarRow extends SimpleTag<HTMLDivElement> { }

/**
 * This component can be placed after a fixed Toolbar component to fill in the space.
 */
export class ToolbarFixedAdjust extends SimpleTag<HTMLDivElement> { }

/**
 * A Menu Icon For the Toolbar. This is an instance of the Icon component.
 */
export class ToolbarMenuIcon extends React.Component<IconButtonProps> { }

/**
 * A standard Icon for toolbar actions. This is an instance of the Icon component.
 */
export class ToolbarIcon extends React.Component<IconButtonProps> { }

export type ToolbarProps = {
  /** Makes the toolbar fixed */
  fixed?: boolean,
  /** Adds a waterfall effect on scroll */
  waterfall?: boolean,
  /** Fixes the last row of a multi-row toolbar */
  fixedLastrowOnly?: boolean,
  /** makes the toolbar flexible */
  flexible?: boolean,
  /** further defines the background and title movement behavior, use in conjunction with flexible. */
  flexibleDefaultBehavior?: boolean
} & SimpleTagProps<HTMLElement>;

export class Toolbar extends React.Component<ToolbarProps> { }
