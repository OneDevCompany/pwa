import * as React from 'react';
import classNames from 'classnames';
import { SFC } from 'react';

type ProgressBarProps = {
  hidden?: boolean;
};

export const ProgressBar: SFC<ProgressBarProps> = ({ children, hidden }) => (
  <div
    className={classNames(
      'odc-progress-bar',
      { 'odc-progress-bar--hidden': hidden },
    )}
  >
    {children}
  </div>
);

ProgressBar.defaultProps = {
  hidden: false,
};
