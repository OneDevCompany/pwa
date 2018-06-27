import * as React from 'react';
import { HTMLProps, SFC } from 'react';
import { Scrollbars as ReactCustomScrollbars } from 'tt-react-custom-scrollbars';

type Values = {
  clientHeight: number;
  clientWidth: number;
  left: number;
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  top: number;
};

type ScrollbarsProps = {
  onScroll?: (e: React.SyntheticEvent) => void;
  onScrollFrame?: (values: Values) => void;
  onScrollStart?: () => void;
  onScrollStop?: () => void;
  onUpdate?: (values: Values) => void;
  renderView?: () => void;
  renderTrackHorizontal?: () => void;
  renderTrackVertical?: () => void;
  renderThumbHorizontal?: () => void;
  renderThumbVertical?: () => void;
  // autoHide?: boolean;
  autoHideTimeout?: number;
  autoHideDuration?: number;
  autoHeight?: boolean;
  autoHeightMin?: number;
  autoHeightMax?: number;
  // thumbMinSize?: number;
  // universal?: boolean;
} & HTMLProps<HTMLDivElement>;

export const Scrollbars: SFC<ScrollbarsProps> = ({ children, ...otherProps }) => (
  <ReactCustomScrollbars
    autoHide
    universal
    {...otherProps}
  >
    {children}
  </ReactCustomScrollbars>
);
