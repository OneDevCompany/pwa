import * as React from 'react';
import classNames from 'classnames';
import { SFC } from 'react';

type DatagridAnimationWrapperProps = {
  open?: boolean;
};

export const DatagridAnimationWrapper: SFC<DatagridAnimationWrapperProps> = ({children, open}) => (
  <div
    className={classNames(
      'odc-datagrid__animation-wrapper',
      { 'odc-datagrid__animation-wrapper--open': open },
    )}
  >
    {children}
  </div>
);

DatagridAnimationWrapper.defaultProps = {
  open: false,
};
